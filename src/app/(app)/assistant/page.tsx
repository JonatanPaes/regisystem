import { ArrowRight } from 'lucide-react'

import { Button } from '@/app/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui/table'

export default async function Assistant() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-bold tracking-tight md:text-2xl">
        Lista de Clientes
      </h1>
      <div className="space-y-2.5 ">
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[148px]">Código</TableHead>
                <TableHead className="w-[250px]">Nome</TableHead>
                <TableHead className="w-[140px]">CPF ou CNPJ</TableHead>
                <TableHead>E-mail</TableHead>
                <TableHead className="w-[120px]"></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell>121d5sad5dd</TableCell>
                <TableCell>Jonatán Paes</TableCell>
                <TableCell>45682235565</TableCell>
                <TableCell>jonatanpaes182@gmail.com</TableCell>
                <TableCell>
                  <Button size="lg">
                    <ArrowRight className="h-3 w-3" />
                    <span className="sr-only">Detalhes do pedido</span>
                  </Button>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>55626566262665</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>59521578966</TableCell>
                <TableCell>johndoe@gmail.com</TableCell>
                <TableCell>
                  <Button size="lg">
                    <ArrowRight className="h-3 w-3" />
                    <span className="sr-only">Detalhes do pedido</span>
                  </Button>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>121d5sad5dd</TableCell>
                <TableCell>Lionel Messi</TableCell>
                <TableCell>86555622555</TableCell>
                <TableCell>leomessi@gmail.com</TableCell>
                <TableCell>
                  <Button size="lg">
                    <ArrowRight className="h-3 w-3" />
                    <span className="sr-only">Detalhes do pedido</span>
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
