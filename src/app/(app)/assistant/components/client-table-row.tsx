'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
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
        clients.map((client) => (
          <TableRow key={client.code}>
            <TableCell>{client.code}</TableCell>
            <TableCell>{client.name}</TableCell>
            <TableCell>{client.cpfOrCnpj}</TableCell>
            <TableCell>{client.email}</TableCell>
            <TableCell>
              <Button asChild size="lg">
                <Link href={`/assistant/product/${client.code}`}>
                  <ArrowRight className="h-3 w-3" />
                  <span className="sr-only">Detalhes do pedido</span>
                </Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
    </>
  )
}
