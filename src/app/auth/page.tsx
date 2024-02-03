import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'

export default async function Auth() {
  return (
    <div className="flex min-h-screen items-center justify-center antialiased ">
      <div className="w-full max-w-lg rounded-lg bg-secondary p-6 text-muted-foreground">
        <div className="mt-6">
          <h1 className="text-center text-2xl font-semibold">
            Entrar na RegiSystem
          </h1>
          <form className="mt-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" placeholder="Digite seu e-mail" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Sua senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="Digite sua senha"
              />
            </div>

            <Button disabled={false} className="w-full" type="submit">
              Entrar
            </Button>
          </form>
        </div>

        <footer className="mt-6 text-center text-sm">
          &copy; {new Date().getFullYear()} - RegiSystem
        </footer>
      </div>
    </div>
  )
}
