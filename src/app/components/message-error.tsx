import { ReactNode } from 'react'

export function MessageError({ children }: { children: ReactNode }) {
  return <span className="pl-1 text-sm text-rose-400">{children}</span>
}
