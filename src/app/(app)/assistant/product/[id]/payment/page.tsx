import { CreditCard, DollarSign } from 'lucide-react'
import Link from 'next/link'

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

export default function Payment({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-bold tracking-tight md:text-2xl">
        Método de Pagamento
      </h1>

      <div className="grid gap-6  pt-0">
        <RadioGroup className="grid grid-cols-3 gap-4" defaultValue="card">
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

        <div>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Parcelas" defaultValue="12x" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1X">1X</SelectItem>
              <SelectItem value="2X">2X</SelectItem>
              <SelectItem value="3X">3X</SelectItem>
              <SelectItem value="4X">4X</SelectItem>
              <SelectItem value="5x">5x</SelectItem>
              <SelectItem value="6X">6X</SelectItem>
              <SelectItem value="7x">7x</SelectItem>
              <SelectItem value="8X">8X</SelectItem>
              <SelectItem value="9X">9X</SelectItem>
              <SelectItem value="10X">10X</SelectItem>
              <SelectItem value="11X">11X</SelectItem>
              <SelectItem value="12X">12X</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex w-full gap-4 md:w-72">
          <ButtonBack />

          <Button className="w-full" asChild>
            <Link href={`/assistant/product/${params.id}/payment/address`}>
              Continuar
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
