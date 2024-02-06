'use client'

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'

interface Client {
  id: string
  name: string
}

interface Product {
  price: number
  productName: string
  stock: number
}

interface AssistantContent {
  client?: Client
  setClient?: Dispatch<SetStateAction<Client | undefined>>
  product?: Product
  setProduct?: Dispatch<SetStateAction<Product | undefined>>
}

const AssistantContext = createContext<AssistantContent>({})

export function AssistantProvider({ children }: { children: ReactNode }) {
  const [client, setClient] = useState<Client>()
  const [product, setProduct] = useState<Product>()

  return (
    <AssistantContext.Provider
      value={{ client, setClient, product, setProduct }}
    >
      {children}
    </AssistantContext.Provider>
  )
}

export const useAssistant = () => useContext(AssistantContext)
