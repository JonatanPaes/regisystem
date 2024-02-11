'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { CreditCard, DollarSign } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { ButtonBack } from '@/app/components/button-back'
import { Button } from '@/app/components/ui/button'
import { Label } from '@/app/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/app/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select'
import { useAssistant } from '@/contexts/assistant-context'
import { priceFormatter } from '@/utils/formatter'

const paymentForm = z.object({
  type: z.enum(['card', 'cash'], {
    required_error: 'Selecione um método de pagamento.',
  }),
  installmentNumbers: z.string().min(1).max(12),
})

type PaymentForm = z.infer<typeof paymentForm>

interface Payment {
  type: 'card' | 'cash'
}

export default function Payment({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { setPayment, product } = useAssistant()

  const { control, watch } = useForm<PaymentForm>({
    resolver: zodResolver(paymentForm),
    defaultValues: {
      type: 'card',
      installmentNumbers: '1X',
    },
  })

  const handleSetPaymentContext = useCallback(() => {
    setPayment?.({
      type: watch('type'),
      installmentNumbers: watch('installmentNumbers'),
    })

    router.push(`/assistant/product/${params.id}/payment/address`)
  }, [setPayment, watch, router, params])

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-bold tracking-tight md:text-2xl">
        Método de Pagamento
      </h1>

      <div className="grid gap-6  pt-0">
        <Controller
          control={control}
          name="type"
          render={({ field }) => {
            return (
              <RadioGroup
                onValueChange={field.onChange}
                className="grid grid-cols-3 gap-4"
                defaultValue={field.value}
              >
                <div>
                  <RadioGroupItem
                    value="card"
                    id="card"
                    className="peer sr-only shadow ring-offset-background focus-visible:ring-1 focus-visible:ring-offset-2"
                  />
                  <Label
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 text-sm font-medium leading-none hover:bg-accent hover:text-accent-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    htmlFor="card"
                  >
                    <CreditCard />
                    Cartão
                  </Label>
                </div>

                <div>
                  <RadioGroupItem
                    value="cash"
                    id="cash"
                    className="peer sr-only shadow ring-offset-background focus-visible:ring-1 focus-visible:ring-offset-2"
                  />
                  <Label
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 text-sm font-medium leading-none hover:bg-accent hover:text-accent-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    htmlFor="cash"
                  >
                    <DollarSign />
                    Dinheiro
                  </Label>
                </div>
              </RadioGroup>
            )
          }}
        />

        {watch('type') === 'card' && (
          <Controller
            control={control}
            name="installmentNumbers"
            render={({ field }) => {
              return (
                <div>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Parcelas" defaultValue="12x" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1X">
                        1X{'  '}
                        {priceFormatter.format(
                          product?.price ? product?.price / 1 : 0,
                        )}
                      </SelectItem>
                      <SelectItem value="2X">
                        2X{'  '}
                        {priceFormatter.format(
                          product?.price ? product?.price / 2 : 0,
                        )}
                      </SelectItem>
                      <SelectItem value="3X">
                        3X{'  '}
                        {priceFormatter.format(
                          product?.price ? product?.price / 3 : 0,
                        )}
                      </SelectItem>
                      <SelectItem value="4X">
                        4X{'  '}
                        {priceFormatter.format(
                          product?.price ? product?.price / 4 : 0,
                        )}
                      </SelectItem>
                      <SelectItem value="5x">
                        5X{'  '}
                        {priceFormatter.format(
                          product?.price ? product?.price / 5 : 0,
                        )}
                      </SelectItem>
                      <SelectItem value="6X">
                        6X{'  '}
                        {priceFormatter.format(
                          product?.price ? product?.price / 6 : 0,
                        )}
                      </SelectItem>
                      <SelectItem value="7x">
                        7X{'  '}
                        {priceFormatter.format(
                          product?.price ? product?.price / 7 : 0,
                        )}
                      </SelectItem>
                      <SelectItem value="8X">
                        8X{'  '}
                        {priceFormatter.format(
                          product?.price ? product?.price / 8 : 0,
                        )}
                      </SelectItem>
                      <SelectItem value="9X">
                        9X{'  '}
                        {priceFormatter.format(
                          product?.price ? product?.price / 9 : 0,
                        )}
                      </SelectItem>
                      <SelectItem value="10X">
                        10X{'  '}
                        {priceFormatter.format(
                          product?.price ? product?.price / 10 : 0,
                        )}
                      </SelectItem>
                      <SelectItem value="11X">
                        11X{'  '}
                        {priceFormatter.format(
                          product?.price ? product?.price / 11 : 0,
                        )}
                      </SelectItem>
                      <SelectItem value="12X">
                        12X{'  '}
                        {priceFormatter.format(
                          product?.price ? product?.price / 12 : 0,
                        )}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )
            }}
          />
        )}

        <div className="flex w-full gap-4 md:w-72">
          <ButtonBack />

          <Button onClick={handleSetPaymentContext} className="w-full">
            Continuar
          </Button>
        </div>
      </div>
    </div>
  )
}
