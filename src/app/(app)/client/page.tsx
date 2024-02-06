'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { ButtonBack } from '@/app/components/button-back'
import { Button } from '@/app/components/ui/button'
import { Input } from '@/app/components/ui/input'
import { Label } from '@/app/components/ui/label'

const clientForm = z.object({
  code: z.string(),
  name: z.string(),
  cpfOrCnpj: z.string().min(8),
  email: z.string().email(),
})

type ClientForm = z.infer<typeof clientForm>

export default function Client() {
  const { push } = useRouter()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ClientForm>({
    resolver: zodResolver(clientForm),
  })

  async function handleClient(data: ClientForm) {
    const existingClients = localStorage.getItem('clients')

    let clients = []
    try {
      if (existingClients) {
        clients = JSON.parse(existingClients)
      }

      clients.push(data)

      localStorage.setItem('clients', JSON.stringify(clients))

      toast.success('Cliente cadastrado com sucesso!')

      push('/')
    } catch {
      toast.error('Erro ao cadastrar cliente.')
    }
  }

  return (
    <div className="flex flex-col justify-center gap-6">
      <div className="flex flex-col gap-2 text-start">
        <h1 className="text-2xl font-semibold tracking-tight">
          Cadastro de cliente
        </h1>
      </div>

      <form onSubmit={handleSubmit(handleClient)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="code">Código</Label>
          <Input id="code" type="text" {...register('code')} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            type="text"
            placeholder="Digite o nome"
            {...register('name')}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="cpfOrCnpj">CPF ou CNPJ</Label>
          <Input
            id="cpfOrCnpj"
            type="number"
            placeholder="Digite o CPF ou CNPJ"
            {...register('cpfOrCnpj')}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            placeholder="Digite o e-mail"
            {...register('email')}
          />
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
