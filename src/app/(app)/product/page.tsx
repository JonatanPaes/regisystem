import { Button } from '@/app/components/ui/button'
import { Input } from '@/app/components/ui/input'
import { Label } from '@/app/components/ui/label'
import { Textarea } from '@/app/components/ui/textarea'

export default async function Product() {
  return (
    <div className="flex flex-col justify-center gap-6">
      <div className="flex flex-col gap-2 text-start">
        <h1 className="text-2xl font-semibold tracking-tight">
          Cadastre o produto
        </h1>
      </div>

      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="restaurantName">Nome do produto</Label>
          <Input
            id="productName"
            type="text"
            placeholder="Digite nome do seu produto"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="restaurantName">Preço</Label>
          <Input id="price" type="number" placeholder="Digite o preço" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="restaurantName">Quantidade em estoque</Label>
          <Input
            id="stock"
            type="number"
            placeholder="Digite a quantidade de estoque"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="restaurantName">Descrição</Label>
          <Textarea
            id="description"
            placeholder="Digite a descrição do produto"
          />
        </div>

        <div className="flex w-full gap-4 lg:w-72">
          <Button
            disabled={false}
            variant="secondary"
            className="w-full"
            type="submit"
          >
            Cancelar
          </Button>

          <Button disabled={false} className="w-full" type="submit">
            Salvar
          </Button>
        </div>
      </form>
    </div>
  )
}
