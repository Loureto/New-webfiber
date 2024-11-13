import { Chip } from '@nextui-org/react'

export interface UserStatusProps {
  status: 'active' | 'busy'
}

export const UserStatus = ({ status }: UserStatusProps) => {
  const colors: Record<UserStatusProps['status'], 'success' | 'danger'> = {
    active: 'success',
    busy: 'danger'
  }

  const lowerCase = status.toLowerCase() as UserStatusProps['status']

  return (
    <Chip variant="flat" color={colors[lowerCase]}>
      {status}
    </Chip>
  )
}
