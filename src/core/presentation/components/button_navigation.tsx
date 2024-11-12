'use client'

import { Button, ButtonProps } from '@nextui-org/button'
import { cn } from '@nextui-org/theme'
import { useRouter } from 'next/navigation'

type ButtonNavProps = ButtonProps & {
  text: string
  icon?: React.ReactNode
  current?: boolean
  path: string
}

export const ButtonNav = ({
  className,
  text = '',
  icon,
  path = '',
  current = false,
  ...props
}: ButtonNavProps) => {
  const router = useRouter()

  return (
    <Button
      className={cn(
        'group justify-start gap-2 bg-transparent px-6 font-normal hover:bg-zinc-800 hover:font-bold hover:text-white',
        current && 'bg-zinc-800 font-bold text-white',
        className
      )}
      onClick={() => router.push(path)}
      variant="flat"
      size="lg"
      {...props}
    >
      {icon && icon}
      {text && text}
    </Button>
  )
}
