'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

import { Badge } from '@/app/components/ui/badge'
import { Card, CardContent } from '@/app/components/ui/card'
import { useAssistant } from '@/contexts/assistant-context'

interface AssistantProducts {
  image?: string
  description: string
  price: number
  name: string
  stock: number
}

export default function AssistantOrderProduct({
  params,
}: {
  params: { id: string }
}) {
  const [products, setProducts] = useState<AssistantProducts[]>([])

  const { setProduct } = useAssistant()

  function getProducts() {
    const storedProducts = localStorage.getItem('products')

    if (storedProducts) {
      return JSON.parse(storedProducts)
    }

    return []
  }

  useEffect(() => {
    const loadedClients = getProducts()
    setProducts(loadedClients)
  }, [])

  const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength) + '...'
  }

  const handleSetProductContext = useCallback(
    (product: AssistantProducts) => {
      setProduct?.({
        price: product.price,
        productName: product.name,
        stock: product.stock,
      })
    },
    [setProduct],
  )

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {products.map((product) => (
        <Link
          href={`/assistant/product/${params.id}/payment`}
          key={product.name}
          onClick={() => handleSetProductContext(product)}
        >
          <Card className="h-[420px] max-w-full rounded-2xl md:w-96">
            <CardContent className="px-1 py-0 pt-1">
              <div className="relative h-[160px] w-full">
                <div className="absolute left-2 top-2 z-50">
                  <Badge
                    variant="default"
                    className="left-3 top-3 flex items-center gap-1 opacity-90"
                  >
                    <span className="text-xs">Quantidade: {product.stock}</span>
                  </Badge>
                </div>
                <Image
                  alt="product"
                  src={product.image ?? '/default-image.jpg'}
                  style={{
                    objectFit: 'cover',
                  }}
                  fill
                  className="rounded-2xl"
                />
              </div>

              <div className="overflow-hidden px-2 pb-3 ">
                <h2 className="mt-2 overflow-hidden text-ellipsis text-nowrap font-bold">
                  {product.name}
                </h2>
                <p className="overflow-hidden text-ellipsis text-nowrap text-sm text-card-foreground">
                  {product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </p>
                <p className="overflow-hidden text-ellipsis text-wrap text-sm text-secondary-foreground sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                  {truncateText(`${product.description}`, 400)}
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
