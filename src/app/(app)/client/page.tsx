import { Button } from '@/app/components/ui/button'
import { Input } from '@/app/components/ui/input'
import { Label } from '@/app/components/ui/label'

export default async function Client() {
  return (
    <div className="flex flex-col justify-center gap-6">
      <div className="flex flex-col gap-2 text-start">
        <h1 className="text-2xl font-semibold tracking-tight">
          Cadastro de cliente
        </h1>
      </div>

      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="restaurantName">Código</Label>
          <Input id="code" type="text" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="restaurantName">Nome</Label>
          <Input id="productName" type="text" placeholder="Digite o nome" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="restaurantName">CPF ou CNPJ</Label>
          <Input id="price" type="number" placeholder="Digite o CPF ou CNPJ" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="restaurantName">E-mail</Label>
          <Input id="stock" type="email" placeholder="Digite o e-mail" />
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
