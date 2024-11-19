'use client'

import { cn } from '@nextui-org/theme'
import { useRouter } from 'next/navigation'

type ButtonNavProps = React.ComponentProps<'div'> & {
  text: string
  icon?: React.ReactNode
  current?: boolean
  path: string
  expanded?: boolean
}

export const ButtonNav = ({
  className,
  text = '',
  icon,
  path = '',
  current = false,
  expanded = true,
  ...props
}: ButtonNavProps) => {
  const router = useRouter()

  return (
    <div
      className={cn(
        'flex cursor-pointer flex-wrap items-center overflow-hidden rounded-lg p-3 transition-all duration-500 hover:bg-zinc-800 hover:font-bold hover:text-white',
        expanded ? 'gap-4 px-6 text-sm' : 'justify-center gap-2 text-xs',
        current && 'bg-zinc-800 font-bold text-white',
        className
      )}
      onClick={() => router.push(path)}
      {...props}
    >
      {icon && <span className={!expanded ? 'mr-px' : ''}>{icon}</span>}
      {text && text}
    </div>
  )
}
