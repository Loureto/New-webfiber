'use client'

import { makeCreateUser } from '@/modules/users/users_module'
import { useCreateUserModel } from './create_user_model'
import { CreateUserView } from './create_user_view'
import { useUserStore } from '../../store'

interface CreateUserViewModelProps {
  isOpen: boolean
  onOpenChange: () => void
  onClose: () => void
}

export const CreateUserViewModel = ({
  isOpen,
  onOpenChange,
  onClose
}: CreateUserViewModelProps) => {
  const methods = useCreateUserModel({
    createUserUsecase: makeCreateUser(),
    store: useUserStore()
  })

  return (
    <CreateUserView
      methods={methods}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onClose={onClose}
    />
  )
}
