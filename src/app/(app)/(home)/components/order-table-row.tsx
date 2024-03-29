'use client'

import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useEffect, useState } from 'react'

import { TableCell, TableRow } from '@/app/components/ui/table'
import { priceFormatter } from '@/utils/formatter'

interface Orders {
  id: string
  createdAt: string
  address: string
  nameClient: string
  productName: string
  paymentMethod: string
  price: number
}
export function OrderTableRow() {
  const [orders, setOrders] = useState<Orders[]>([])

  function getOrders() {
    const storedOrders = localStorage.getItem('orders')

    if (storedOrders) {
      return JSON.parse(storedOrders)
    }

    return []
  }

  useEffect(() => {
    const loadedClients = getOrders()
    setOrders(loadedClients)
  }, [])

  return (
    <>
      {orders &&
        orders.map((order) => {
          return (
            <TableRow key={order.id}>
              <TableCell>
                {format(order.createdAt, 'dd-MM-yyyy', {
                  locale: ptBR,
                })}
              </TableCell>
              <TableCell>{order.nameClient}</TableCell>
              <TableCell>{order.productName}</TableCell>
              <TableCell>{order.paymentMethod}</TableCell>
              <TableCell>{priceFormatter.format(order.price)}</TableCell>
            </TableRow>
          )
        })}
    </>
  )
}
