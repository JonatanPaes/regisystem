'use client'

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'

interface Client {
  id: string
  name: string
}

interface Product {
  id: string
  price: number
  productName: string
  stock: number
}

interface Payment {
  type: 'card' | 'cash'
  installmentNumbers: string
}

interface AssistantContent {
  client?: Client
  setClient?: Dispatch<SetStateAction<Client | undefined>>
  product?: Product
  setProduct?: Dispatch<SetStateAction<Product | undefined>>
  payment?: Payment
  setPayment?: Dispatch<SetStateAction<Payment | undefined>>
}

const AssistantContext = createContext<AssistantContent>({})

export function AssistantProvider({ children }: { children: ReactNode }) {
  const isBrowser = typeof window !== 'undefined'

  const getLocalStorage = (key: string, initialValue: any) => {
    if (isBrowser) {
      const storedValue = localStorage.getItem(key)
      try {
        return storedValue ? JSON.parse(storedValue) : initialValue
      } catch (error) {
        console.error(
          `Erro ao fazer parse do item '${key}' do Local Storage:`,
          error,
        )
        return initialValue
      }
    }
    return initialValue
  }

  const [client, setClient] = useState<Client | undefined>(() =>
    getLocalStorage('client', undefined),
  )
  const [product, setProduct] = useState<Product | undefined>(() =>
    getLocalStorage('product', undefined),
  )
  const [payment, setPayment] = useState<Payment | undefined>(() =>
    getLocalStorage('payment', undefined),
  )

  useEffect(() => {
    localStorage.setItem('client', JSON.stringify(client))
    localStorage.setItem('product', JSON.stringify(product))
    localStorage.setItem('payment', JSON.stringify(payment))
  }, [client, product, payment])

  return (
    <AssistantContext.Provider
      value={{ client, setClient, product, setProduct, payment, setPayment }}
    >
      {children}
    </AssistantContext.Provider>
  )
}

export const useAssistant = () => useContext(AssistantContext)
