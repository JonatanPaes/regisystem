import { CreditCard, DollarSign } from 'lucide-react'

import { Label } from '@/app/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/app/components/ui/radio-group'

export default function Payment() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-bold tracking-tight md:text-2xl">
        Método de Pagamento
      </h1>

      <div className="grid gap-6  pt-0">
        <RadioGroup
          className="grid grid-cols-3 gap-4"
          defaultValue="option-one"
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
      </div>
    </div>
  )
}
