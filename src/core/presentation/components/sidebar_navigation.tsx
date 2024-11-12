'use client'

import { Button } from '@nextui-org/button'
import { DashboardIcon, FolderIcon, TicketIcon, UserIcon } from '../assets'
import { ButtonNav } from './button_navigation'
import { usePathname } from 'next/navigation'
import { CookieStorageAdapter } from '@/core/infra'

const routes = [
  { id: 1, name: 'Dashboard', path: '/dashboard', icon: <DashboardIcon /> },
  { id: 2, name: 'Users', path: '/users', icon: <UserIcon /> },
  { id: 3, name: 'Tickets', path: '/tickets', icon: <TicketIcon /> },
  { id: 4, name: 'Orders', path: '/orders', icon: <FolderIcon /> }
]

export const SidebarNavigation = () => {
  const path = usePathname()
  const store = new CookieStorageAdapter()

  const handleLogout = () => {
    store.set('account')
    window.localStorage.clear()
    window.location.reload()
  }

  return (
    <div className="relative flex w-[366px] flex-col bg-zinc-900 px-6 py-10">
      <nav className="flex flex-col">
        {routes.map((route) => (
          <ButtonNav
            key={route.id}
            text={route.name}
            icon={route.icon}
            path={route.path}
            current={route.path === path}
          />
        ))}
      </nav>

      <Button
        className="absolute bottom-10 left-6 right-6"
        color="danger"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  )
}
