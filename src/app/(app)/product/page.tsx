'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/app/components/ui/button'
import { Input } from '@/app/components/ui/input'
import { Label } from '@/app/components/ui/label'
import { Textarea } from '@/app/components/ui/textarea'

const productForm = z.object({
  productName: z.string(),
  price: z.string(),
  stock: z.string(),
  description: z.string(),
})

type ProductForm = z.infer<typeof productForm>

export default function Product() {
  const { push } = useRouter()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ProductForm>()

  async function handleProduct(data: ProductForm) {
    const existingProducts = localStorage.getItem('products')

    let products = []
    try {
      if (existingProducts) {
        products = JSON.parse(existingProducts)
      }

      products.push(data)

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

      <form onSubmit={handleSubmit(handleProduct)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="productName">Nome do produto</Label>
          <Input
            id="productName"
            type="text"
            placeholder="Digite nome do seu produto"
            {...register('productName')}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="price">Preço</Label>
          <Input
            id="price"
            type="number"
            placeholder="Digite o preço"
            {...register('price')}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="stock">Quantidade em estoque</Label>
          <Input
            id="stock"
            type="number"
            placeholder="Digite a quantidade de estoque"
            {...register('stock')}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Descrição</Label>
          <Textarea
            id="description"
            placeholder="Digite a descrição do produto"
            {...register('description')}
          />
        </div>

        <div className="flex w-full gap-4 md:w-72">
          <Button
            disabled={isSubmitting}
            variant="secondary"
            className="w-full"
          >
            Cancelar
          </Button>

          <Button disabled={isSubmitting} className="w-full" type="submit">
            Salvar
          </Button>
        </div>
      </form>
    </div>
  )
}
