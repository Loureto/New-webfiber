'use client'

import { CookieStorageAdapter } from '@/core/infra'
import { cn } from '@nextui-org/theme'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import {
  LuCreditCard,
  LuFileText,
  LuLayoutDashboard,
  LuLogOut,
  LuPieChart,
  LuSettings,
  LuUserCircle
} from 'react-icons/lu'
import { MdClose, MdMenu } from 'react-icons/md'
import { NinjaIcon } from '../assets'
import { ButtonNav } from './button_navigation'

const routes = [
  {
    id: 1,
    name: 'Dashboard',
    path: '/dashboard',
    icon: <LuLayoutDashboard strokeWidth={2} size={20} />
  },
  {
    id: 2,
    name: 'Users',
    path: '/users',
    icon: <LuUserCircle strokeWidth={2} size={20} />
  },
  {
    id: 2,
    name: 'Orders',
    path: '/orders',
    icon: <LuFileText strokeWidth={2} size={20} />
  },
  {
    id: 4,
    name: 'Reports',
    path: '#',
    icon: <LuPieChart strokeWidth={2} size={20} />
  },
  {
    id: 5,
    name: 'Payments',
    path: '#',
    icon: <LuCreditCard strokeWidth={2} size={20} />
  },
  {
    id: 5,
    name: 'Configuration',
    path: '#',
    icon: <LuSettings strokeWidth={2} size={20} />
  }
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
          'flex cursor-pointer items-center overflow-hidden rounded-lg bg-danger/50 p-3 text-white transition-all duration-300',
          isExpanded ? 'gap-4 px-6 text-sm' : 'flex-col gap-2 text-xs'
        )}
        onClick={handleLogout}
      >
        <LuLogOut strokeWidth={2} size={20} />
        Logout
      </button>
    </motion.div>
  )
}
