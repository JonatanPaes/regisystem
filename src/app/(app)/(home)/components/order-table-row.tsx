'use client'

import { useEffect, useState } from 'react'

import { TableCell, TableRow } from '@/app/components/ui/table'

interface Orders {
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
          console.log('order ===>', order)
          return (
            <TableRow key={order.nameClient}>
              <TableCell>{order.nameClient}</TableCell>
              <TableCell>{order.productName}</TableCell>
              <TableCell>{order.paymentMethod}</TableCell>
              <TableCell>
                {order.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </TableCell>
            </TableRow>
          )
        })}
    </>
  )
}
