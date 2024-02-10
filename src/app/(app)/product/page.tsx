'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { ButtonBack } from '@/app/components/button-back'
import { MessageError } from '@/app/components/message-error'
import { Button } from '@/app/components/ui/button'
import { Input } from '@/app/components/ui/input'
import { Label } from '@/app/components/ui/label'
import { Textarea } from '@/app/components/ui/textarea'

const productForm = z.object({
  name: z.string().min(1, { message: 'O nome é obrigatório.' }),
  price: z
    .number()
    .min(0, { message: 'O preço não pode ser negativo.' })
    .min(1, { message: 'O preço é obrigatório.' }),
  stock: z
    .number()
    .min(0, { message: 'O estoque não pode ser negativo.' })
    .min(1, { message: 'O estoque é obrigatório.' }),
  description: z
    .string()
    .min(1, { message: 'A descrição é obrigatória' })
    .max(400, { message: 'A descrição pode conter 400 caracteres.' }),
})

type ProductForm = z.infer<typeof productForm>

export default function Product() {
  const { push } = useRouter()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ProductForm>({
    resolver: zodResolver(productForm),
  })

  async function handleCreateNewProduct(data: ProductForm) {
    const existingProducts = localStorage.getItem('products')

    let products = []
    try {
      if (existingProducts) {
        products = JSON.parse(existingProducts)
      }

      const uniqueID = Date.now() + Math.random().toString(16).substring(2)

      const newProduct = { ...data, id: uniqueID }

      products.push(newProduct)

      localStorage.setItem('products', JSON.stringify(products))

      toast.success('Produto cadastrado com sucesso!')

      push('/')
    } catch {
      toast.error('Erro ao cadastrar produto.')
    }
  }

  return (
    <div className="flex flex-col justify-center gap-6">
      <div className="flex flex-col gap-2 text-start">
        <h1 className="text-2xl font-semibold tracking-tight">
          Cadastro de produto
        </h1>
      </div>

      <form
        onSubmit={handleSubmit(handleCreateNewProduct)}
        className="space-y-4"
      >
        <div className="space-y-2">
          <Label htmlFor="name">Nome do produto</Label>
          <Input
            id="name"
            type="text"
            placeholder="Digite nome do seu produto"
            {...register('name')}
          />

          {errors.name && <MessageError>{errors.name.message}</MessageError>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="price">Preço</Label>
          <Input
            id="price"
            type="number"
            placeholder="Digite o preço"
            required
            {...register('price', { valueAsNumber: true })}
          />

          {errors.price && <MessageError>{errors.price.message}</MessageError>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="stock">Quantidade em estoque</Label>
          <Input
            id="stock"
            type="number"
            required
            placeholder="Digite a quantidade de estoque"
            {...register('stock', { valueAsNumber: true })}
          />

          {errors.stock && <MessageError>{errors.stock.message}</MessageError>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Descrição</Label>
          <Textarea
            id="description"
            placeholder="Digite a descrição do produto"
            {...register('description')}
          />

          {errors.description && (
            <MessageError>{errors.description.message}</MessageError>
          )}
        </div>

        <div className="flex w-full gap-4 md:w-72">
          <ButtonBack />

          <Button disabled={isSubmitting} className="w-full" type="submit">
            Salvar
          </Button>
        </div>
      </form>
    </div>
  )
}
