import Link from 'next/link'

export default function OrderSuccess() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-2xl font-bold md:text-4xl">
        Compra feita com sucesso
      </h1>
      <p className="text-accent-foreground">
        Voltar para o{' '}
        <Link href="/" className="text-primary">
          Home
        </Link>
      </p>
    </div>
  )
}
