import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Compra feita com sucesso',
}

export default function OrderSuccess() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-2xl font-bold md:text-4xl">
        Compra feita com sucesso
      </h1>
      <p className="text-accent-foreground">
        Voltar para tela de{' '}
        <Link href="/" className="text-primary">
          Início
        </Link>
      </p>
    </div>
  )
}
