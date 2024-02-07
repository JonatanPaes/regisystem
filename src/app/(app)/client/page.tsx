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

const clientForm = z.object({
  // Todo criar validação de CPF e CNPJ
  code: z.string().min(1, { message: 'O code é obrigatório.' }),
  name: z.string().min(1, { message: 'O nome é obrigatório.' }),
  cpfOrCnpj: z.string().min(8, {
    message: 'Esse Campo é obrigatório e precisa ter no mínimo 8 caracteres.',
  }),
  email: z
    .string()
    .min(1, {
      message: 'O e-mail é obrigatório.',
    })
    .email({
      message: 'Formato de e-mail inválido',
    })
    .toLowerCase(),
})

type ClientForm = z.infer<typeof clientForm>

export default function Client() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ClientForm>({
    resolver: zodResolver(clientForm),
  })

  async function handleCreateNewClient(data: ClientForm) {
    const existingClients = localStorage.getItem('clients')

    let clients = []
    try {
      if (existingClients) {
        clients = JSON.parse(existingClients)
      }

      clients.push(data)

      localStorage.setItem('clients', JSON.stringify(clients))

      toast.success('Cliente cadastrado com sucesso!')

      router.push('/')
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

      <form
        onSubmit={handleSubmit(handleCreateNewClient)}
        className="space-y-4"
      >
        <div className="space-y-2">
          <Label htmlFor="code">Código</Label>
          <Input
            id="code"
            placeholder="Digite o código do cliente"
            type="text"
            {...register('code')}
          />

          {errors.code && <MessageError>{errors.code.message}</MessageError>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            type="text"
            placeholder="Digite o nome"
            {...register('name')}
          />

          {errors.name && <MessageError>{errors.name.message}</MessageError>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="cpfOrCnpj">CPF ou CNPJ</Label>
          <Input
            id="cpfOrCnpj"
            type="number"
            placeholder="Digite o CPF ou CNPJ"
            {...register('cpfOrCnpj')}
          />

          {errors.cpfOrCnpj && (
            <MessageError>{errors.cpfOrCnpj.message}</MessageError>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            placeholder="Digite o e-mail"
            {...register('email')}
          />

          {errors.email && <MessageError>{errors.email.message}</MessageError>}
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
