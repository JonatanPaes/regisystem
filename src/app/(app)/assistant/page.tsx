import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui/table'

import { ClienteTableRow } from './components/client-table-row'

export default function Assistant() {
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
              <ClienteTableRow />
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
