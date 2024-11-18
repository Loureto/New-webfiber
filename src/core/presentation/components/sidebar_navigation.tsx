'use client'

import { CookieStorageAdapter } from '@/core/infra'
import { cn } from '@nextui-org/theme'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { MdClose, MdMenu } from 'react-icons/md'
import {
  DashboardIcon,
  FolderIcon,
  GraphicPizzaIcon,
  LogoutIcon,
  NinjaIcon,
  UserIcon
} from '../assets'
import { ButtonNav } from './button_navigation'

const routes = [
  { id: 1, name: 'Dashboard', path: '/dashboard', icon: <DashboardIcon /> },
  { id: 2, name: 'Users', path: '/users', icon: <UserIcon /> },
  { id: 3, name: 'Orders', path: '/orders', icon: <FolderIcon /> },
  { id: 4, name: 'Reports', path: '#', icon: <GraphicPizzaIcon /> },
  { id: 5, name: 'Payments', path: '#', icon: <GraphicPizzaIcon /> },
  { id: 5, name: 'Configuration', path: '#', icon: <GraphicPizzaIcon /> }
]

export const SidebarNavigation = () => {
  const path = usePathname()
  const store = new CookieStorageAdapter()
  const [isExpanded, setIsExpanded] = useState(false)

  const handleLogout = () => {
    store.set('account')
    window.localStorage.clear()
    window.location.reload()
  }

  return (
    <motion.div
      className={cn(
        'relative flex w-28 flex-col bg-zinc-900 py-10',
        isExpanded ? 'px-6' : 'px-2'
      )}
      initial={{ width: '100px' }}
      animate={{ width: isExpanded ? '300px' : '100px' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="flex items-center">
        <div
          className={cn(
            'size-14 items-center justify-center rounded-md bg-blue-600',
            isExpanded ? 'flex' : 'hidden'
          )}
        >
          <NinjaIcon className="size-10" />
        </div>

        <button
          className={cn('ml-auto w-fit px-0', isExpanded ? 'mr-0' : 'mx-auto')}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <MdClose className="size-6" />
          ) : (
            <MdMenu className="size-6" />
          )}
        </button>
      </div>

      <div className="mt-8 flex h-full flex-col gap-1">
        {routes.map((route) => (
          <ButtonNav
            key={route.id}
            text={route.name}
            icon={route.icon}
            path={route.path}
            current={route.path === path}
            expanded={isExpanded}
          />
        ))}
      </div>

      <button
        className={cn(
          'flex cursor-pointer items-center overflow-hidden rounded-lg bg-danger/15 p-3 font-bold text-danger transition-all duration-300',
          isExpanded ? 'gap-4 px-6 text-sm' : 'flex-col gap-2 text-xs'
        )}
        onClick={handleLogout}
      >
        <LogoutIcon />
        Logout
      </button>
    </motion.div>
  )
}
