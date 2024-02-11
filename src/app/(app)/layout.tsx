import { ReactNode } from 'react'

import { AssistantProvider } from '@/contexts/assistant-context'

import { Header } from '../components/header'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <AssistantProvider>
      <div className="flex min-h-screen flex-col antialiased ">
        <Header />

        <div className="ml-auto mr-auto flex w-full max-w-[85rem] flex-1 flex-col gap-4 p-8 pt-6">
          {children}
        </div>
      </div>
    </AssistantProvider>
  )
}
