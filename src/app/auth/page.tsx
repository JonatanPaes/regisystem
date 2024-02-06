'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { MessageError } from '../components/message-error'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { authAction } from './action'

const authForm = z.object({
  email: z
    .string()
    .email('Preencha com um e-mail valido.')
    .min(1, { message: 'Esse campo é obrigatário' }),
  password: z
    .string()
    .min(1, { message: 'Esse campo é obrigatário.' })
    .min(4, { message: 'A senha precisa ter no mínimo 4 caracteres' }),
})

type AuthForm = z.infer<typeof authForm>

export default function Auth() {
  const { push } = useRouter()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<AuthForm>({
    resolver: zodResolver(authForm),
  })

  async function handleAuth(data: AuthForm) {
    const { email, password } = data

    if (email === 'teste@teste.com.br' && password === '1234') {
      const response = await authAction(email, password)

      document.cookie = `jwt=${response}`
      toast.success('Login feito com sucesso!!!')

      push('/')
    } else {
      toast.error('Credenciais inválidas.')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center antialiased ">
      <div className="w-full max-w-lg rounded-lg bg-secondary p-6 text-muted-foreground">
        <div className="mt-6">
          <h1 className="text-center text-2xl font-semibold">
            Entrar na RegiSystem
          </h1>

          <form onSubmit={handleSubmit(handleAuth)} className="mt-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                {...register('email')}
              />

              {errors.email && (
                <MessageError>{errors.email.message}</MessageError>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Sua senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                {...register('password')}
              />

              {errors.password && (
                <MessageError>{errors.password.message}</MessageError>
              )}
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
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
