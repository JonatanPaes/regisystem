'use client'

import {
  HomeIcon,
  LogOutIcon,
  Package,
  ShoppingCart,
  User2,
} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Button } from './ui/button'
import { SheetHeader, SheetTitle } from './ui/sheet'

export function SideMenu() {
  const { push } = useRouter()

  function handleLogoutClick() {
    document.cookie = 'jwt=; Max-Age=0;'

    push('/auth')
  }

  return (
    <>
      <SheetHeader className="border-b border-solid border-secondary p-5 text-left">
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center justify-between px-5 py-6">
        <div className="flex items-center gap-3">
          <h2 className="font-bold">Usuário de teste</h2>
        </div>

        <Button onClick={handleLogoutClick} variant="secondary" size="icon">
          <LogOutIcon />
        </Button>
      </div>

      <div className="flex flex-col gap-3 px-5 pt-5">
        <Button variant="outline" className="justify-start" asChild>
          <Link href="/">
            <HomeIcon size={18} className="mr-2" />
            Início
          </Link>
        </Button>

        <Button variant="outline" className="justify-start" asChild>
          <Link href="/product">
            <ShoppingCart size={18} className="mr-2" />
            Cadastro de Produtos
          </Link>
        </Button>

        <Button variant="outline" className="justify-start" asChild>
          <Link href="/client">
            <User2 size={18} className="mr-2" />
            Cadastro de Clientes
          </Link>
        </Button>

        <Button variant="outline" className="justify-start" asChild>
          <Link href="/assistant">
            <Package size={18} className="mr-2" />
            Assistente de Pedido
          </Link>
        </Button>
      </div>
    </>
  )
}
