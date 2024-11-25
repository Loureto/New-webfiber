'use client'

import { notify } from '@/core'
import { IPostCreateUserUsecase } from '@/modules/users/domain'
import {
  createUserDefaultValues,
  createUserValidation,
  CreateUserValidation
} from '@/modules/users/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { UserActions } from '../../store'

interface CreateUserModelProps {
  createUserUsecase: IPostCreateUserUsecase
  store: UserActions
}

export const useCreateUserModel = ({
  createUserUsecase,
  store
}: CreateUserModelProps) => {
  const { control, reset, handleSubmit } = useForm<CreateUserValidation>({
    defaultValues: createUserDefaultValues,
    resolver: zodResolver(createUserValidation)
  })

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (data: CreateUserValidation): Promise<boolean> => {
      return await createUserUsecase.createUser(data)
    },
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['userList', store.currentPage] })
      notify('User created successfully!', 'success')
    },
    onError: () => notify('Error creating user', 'error')
  })

  return {
    ...mutation,
    control,
    reset,
    handleSubmit
  }
}
