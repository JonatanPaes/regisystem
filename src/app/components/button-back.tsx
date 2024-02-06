'use client'

import { useRouter } from 'next/navigation'

import { Button } from './ui/button'

interface ButtonBackProps {
  text?: string
  disabled?: boolean
}

export function ButtonBack({
  text = 'Voltar',
  disabled = false,
}: ButtonBackProps) {
  const router = useRouter()

  function handleBack() {
    router.back()
  }

  return (
    <Button
      onClick={handleBack}
      disabled={disabled}
      variant="secondary"
      className="w-full"
    >
      {text}
    </Button>
  )
}
