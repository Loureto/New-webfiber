import { Chip } from '@nextui-org/react'

type Colors = 'primary' | 'success' | 'warning' | 'danger' | 'default'

export interface OrderStatusProps {
  status: string
}

export const OrderStatus = ({ status }: OrderStatusProps) => {
  const colors: Record<string, Colors> = {
    open: 'danger',
    progress: 'primary',
    done: 'success',
    stopped: 'warning',
    pending: 'warning',
    suspended: 'warning',
    canceled: 'default'
  }

  const lowerCase = status.toLowerCase()

  return (
    <Chip className="capitalize" variant="flat" color={colors[lowerCase]}>
      {status.toLowerCase()}
    </Chip>
  )
}
