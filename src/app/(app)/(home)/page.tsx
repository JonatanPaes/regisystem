import { Metadata } from 'next'

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui/table'

import { OrderTableRow } from './components/order-table-row'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-bold tracking-tight md:text-2xl">Vendas</h1>
      <div className="space-y-2.5 ">
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Data</TableHead>
                <TableHead className="w-[200px]">Nome do cliente </TableHead>
                <TableHead>Nome do Produto</TableHead>
                <TableHead className="w-[200px]">Método de pagamento</TableHead>
                <TableHead className="w-[150x]">Preço do produto</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <OrderTableRow />
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
