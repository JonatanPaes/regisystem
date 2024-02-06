'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
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

const addressForm = z.object({
  cep: z.string().min(8, { message: 'O CEP é obrigatório.' }),
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
  residenceNumber: string
  neighborhood: string
  city: string
  state: string
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
  } = useForm<AddressForm>({
    resolver: zodResolver(addressForm),
  })

  async function handleAddress(data: AddressForm) {
    setAddress(data)
  }

  function handleFinalizeOrder() {
    const existingOrder = localStorage.getItem('orders')

    const orderStructure = {
      price: product?.price,
      paymentMethod: 'card',
      nameClient: client?.name,
      address: address?.address,
    }

    let order = []

    try {
      if (existingOrder) {
        order = JSON.parse(existingOrder)
      }

      order.push(orderStructure)

      toast.success('Pedido realizado com sucesso')

      localStorage.setItem('orders', JSON.stringify(order))

      push('/order-success')
    } catch {
      toast.error('Erro ao finalizar pedido')
    }
  }

  function handleFinishOrder() {
    setIsResumeOpen(!isResumeOpen)
  }

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
                {product?.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </p>

              <span className="text-sm">Qtd: {product?.stock}</span>
            </div>

            <Separator />

            <div>
              <h2 className="font-bold">Método de Pagamento</h2>

              <p className="text-sm text-card-foreground">
                {`${payment?.type === 'card' ? 'Cartão  de credito' : 'Dinheiro'} em ${payment?.installmentNumbers}`}
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
            type="number"
            placeholder="EX. 18690000"
            {...register('cep')}
          />

          {errors.cep && <MessageError>{errors.cep.message}</MessageError>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Endereço</Label>
          <Input
            id="address"
            type="text"
            placeholder="Digite o endereço"
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
            {...register('neighborhood')}
          />

          {errors.neighborhood && (
            <MessageError>{errors.neighborhood.message}</MessageError>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="city">Cidade</Label>
          <Input id="city" type="text" placeholder="" {...register('city')} />

          {errors.city && <MessageError>{errors.city.message}</MessageError>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="state">Estado</Label>
          <Input id="state" type="text" placeholder="" {...register('state')} />

          {errors.state && <MessageError>{errors.state.message}</MessageError>}
        </div>

        <div className="flex w-full gap-4 md:w-72">
          <ButtonBack />

          <Button
            onClick={() => handleFinishOrder()}
            disabled={isSubmitting || !isValid}
            className="w-full"
            type="submit"
          >
            Finalizar Compra
          </Button>
        </div>
      </form>
    </div>
  )
}
