import { MenuIcon } from 'lucide-react'
import Link from 'next/link'

import { SideMenu } from './side-menu'
import { ThemeToggle } from './theme/theme-toggle'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

export function Header() {
  return (
    <header className="border-b">
      <div className="flex h-20 items-center justify-between px-6">
        <Link
          href="/"
          className="text-xl font-extrabold text-accent-foreground"
        >
          RegiSystem
        </Link>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <MenuIcon size={16} />
              </Button>
            </SheetTrigger>

            <SheetContent className="p-0">
              <SideMenu />
            </SheetContent>
          </Sheet>
        </div>

        {/* <div className="ml-auto flex items-center gap-2">
        
        </div> */}
      </div>
    </header>
  )
}
