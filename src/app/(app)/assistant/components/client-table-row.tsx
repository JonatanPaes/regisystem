'use client'

import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/app/components/ui/button'
import { TableCell, TableRow } from '@/app/components/ui/table'

interface AssistantClients {
  code: string
  cpfOrCnpj: string
  email: string
  name: string
}
export function ClienteTableRow() {
  const [clients, setClients] = useState<AssistantClients[]>([])

  function getClients() {
    const storedClients = localStorage.getItem('clients')

    if (storedClients) {
      return JSON.parse(storedClients)
    }

    return []
  }

  useEffect(() => {
    const loadedClients = getClients()
    setClients(loadedClients)
  }, [])

  return (
    <>
      {clients &&
        clients.map((clients) => (
          <TableRow key={clients.code}>
            <TableCell>{clients.code}</TableCell>
            <TableCell>{clients.name}</TableCell>
            <TableCell>{clients.cpfOrCnpj}</TableCell>
            <TableCell>{clients.email}</TableCell>
            <TableCell>
              <Button size="lg">
                <ArrowRight className="h-3 w-3" />
                <span className="sr-only">Detalhes do pedido</span>
              </Button>
            </TableCell>
          </TableRow>
        ))}
    </>
  )
}
