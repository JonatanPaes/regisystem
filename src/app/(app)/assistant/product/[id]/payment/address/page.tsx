'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { ButtonBack } from '@/app/components/button-back'
import { MessageError } from '@/app/components/message-error'
import { Button } from '@/app/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/app/components/ui/dialog'
import { Input } from '@/app/components/ui/input'
import { Label } from '@/app/components/ui/label'
import { Separator } from '@/app/components/ui/separator'
import { useAssistant } from '@/contexts/assistant-context'
import { priceFormatter } from '@/utils/formatter'

const addressForm = z.object({
  cep: z
    .string()
    .min(1, { message: 'O CEP é obrigatório.' })
    .max(8)
    .regex(/^\d{8}$/, { message: 'O CEP deve conter exatamente 8 dígitos.' }),
  address: z.string().min(1, { message: 'O Endereço é obrigatório.' }),
  residenceNumber: z
    .string()
    .min(1, { message: 'O Número da residência é obrigatório.' }),
  neighborhood: z.string().min(1, { message: 'O Bairro é obrigatório.' }),
  city: z.string().min(1, { message: 'A cidade é obrigatória.' }),
  state: z.string().min(1, { message: 'O Estado é obrigatório.' }),
})

type AddressForm = z.infer<typeof addressForm>

interface Address {
  cep: string
  address: string
  residenceNumber?: string
  neighborhood: string
  city: string
  state: string
}

interface Product {
  description: string
  id: string
  name: string
  price: number
  stock: number
}

export default function Address() {
  const { push } = useRouter()

  const { client, product, payment } = useAssistant()

  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const [address, setAddress] = useState<Address>()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
    setError,
    clearErrors,
    setValue,
  } = useForm<AddressForm>({
    resolver: zodResolver(addressForm),
    shouldUnregister: false,
  })

  const paymentMethod =
    payment?.type === 'card' ? 'Cartão  de credito' : 'Dinheiro'

  async function handleAddress(data: AddressForm) {
    setAddress(data)
  }

  function handleFinalizeOrder() {
    const existingOrder = localStorage.getItem('orders')
    const existingProducts = localStorage.getItem('products')

    const orderStructure = {
      id: Date.now() + Math.random().toString(16).substring(2),
      createdAt: new Date().toISOString(),
      price: product?.price,
      productName: product?.productName,
      paymentMethod,
      nameClient: client?.name,
      address: address?.address,
    }

    let orders = []
    let products = []

    try {
      if (existingOrder) {
        orders = JSON.parse(existingOrder)
      }

      orders.push(orderStructure)

      localStorage.setItem('orders', JSON.stringify(orders))
      toast.success('Pedido realizado com sucesso')

      if (existingProducts) {
        products = JSON.parse(existingProducts)
        const productIndex = products.findIndex(
          (findProduct: Product) => findProduct.id === product?.id,
        )

        if (productIndex !== -1) {
          products[productIndex].stock = products[productIndex].stock - 1
          localStorage.setItem('products', JSON.stringify(products))
        }
      }

      push('/order-success')
    } catch {
      toast.error('Erro ao finalizar pedido')
    }
  }

  async function fetchAddressInfo(cep: string) {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      const { data } = response

      if (data.erro) {
        setError('cep', {
          message: 'CEP não encontrado',
        })
      } else {
        clearErrors('cep')

        setAddress((prevAddress) => ({
          ...prevAddress,
          cep,
          address: data.logradouro,
          neighborhood: data.bairro,
          city: data.localidade,
          state: data.uf,
        }))
      }
    } catch (error) {
      console.error('Erro ao buscar informações do CEP:', error)
    }
  }

  useEffect(() => {
    if (address) {
      setValue('cep', address.cep)
      setValue('address', address.address)
      setValue('neighborhood', address.neighborhood)
      setValue('city', address.city)
      setValue('state', address.state)
    }
  }, [address, setValue])

  return (
    <div className="flex flex-col justify-center gap-6">
      <div className="flex flex-col gap-2 text-start">
        <h1 className="text-2xl font-semibold tracking-tight">
          Adicione o endereço
        </h1>
      </div>

      <Dialog open={isResumeOpen} onOpenChange={setIsResumeOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Pedido</DialogTitle>

            <DialogDescription>Resumo do pedido</DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-4">
            <div>
              <h2 className="font-bold">{product?.productName}</h2>

              <p className="text-sm text-card-foreground">
                {' '}
                {priceFormatter.format(product?.price ?? 0)}
              </p>

              <span className="text-sm">Qtd: 1</span>
            </div>

            <Separator />

            <div>
              <h2 className="font-bold">Método de Pagamento</h2>

              <p className="text-sm text-card-foreground">
                {`${paymentMethod} em ${payment?.installmentNumbers}`}
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="font-bold">Nome do Cliente</h2>

              <p className="text-sm text-card-foreground">{client?.name}</p>
            </div>

            <Separator />

            <div>
              <h2 className="font-bold">Endereço</h2>

              <p className="text-sm text-card-foreground">{address?.address}</p>
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
            <Button onClick={handleFinalizeOrder} disabled={isSubmitting}>
              Finalizar Compra
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <form onSubmit={handleSubmit(handleAddress)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="cep">CEP</Label>
          <Input
            id="cep"
            type="text"
            maxLength={8}
            placeholder="EX. 18690000"
            {...register('cep')}
            onChange={(e) => fetchAddressInfo(e.target.value)}
          />

          {errors.cep && <MessageError>{errors.cep.message}</MessageError>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Endereço</Label>
          <Input
            id="address"
            type="text"
            placeholder="Digite o endereço"
            value={address?.address}
            {...register('address')}
          />

          {errors.address && (
            <MessageError>{errors.address.message}</MessageError>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="residenceNumber">Número da residência</Label>
          <Input
            id="residenceNumber"
            type="number"
            placeholder="Digite o número da residência"
            {...register('residenceNumber')}
          />

          {errors.residenceNumber && (
            <MessageError>{errors.residenceNumber.message}</MessageError>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="neighborhood">Bairro</Label>
          <Input
            id="neighborhood"
            type="text"
            placeholder="Digite o bairro"
            value={address?.neighborhood}
            {...register('neighborhood')}
          />

          {errors.neighborhood && (
            <MessageError>{errors.neighborhood.message}</MessageError>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="city">Cidade</Label>
          <Input
            id="city"
            type="text"
            placeholder=""
            value={address?.city}
            {...register('city')}
          />

          {errors.city && <MessageError>{errors.city.message}</MessageError>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="state">Estado</Label>
          <Input
            id="state"
            type="text"
            placeholder=""
            value={address?.state}
            {...register('state')}
          />

          {errors.state && <MessageError>{errors.state.message}</MessageError>}
        </div>

        <div className="flex w-full gap-4 md:w-72">
          <ButtonBack />

          <Button
            onClick={() => setIsResumeOpen(!isResumeOpen)}
            disabled={isSubmitting || !isValid}
            className="w-full"
            type="submit"
          >
            Resumo da Compra
          </Button>
        </div>
      </form>
    </div>
  )
}
