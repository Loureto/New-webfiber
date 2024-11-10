'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { CookieStorageAdapter, notify } from '@/core'
import { ISignInUsecase } from '@/modules/auth/domain'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  signInDefaultValues,
  signInValidation,
  SignInValidation
} from '../../../validations'
import { SignUpStore } from '../../store'

interface SignInModelProps {
  signInUsecase: ISignInUsecase
  storage: CookieStorageAdapter
  store: SignUpStore
}

export const useSignInModel = ({
  signInUsecase,
  storage,
  store
}: SignInModelProps) => {
  const router = useRouter()
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState<boolean>(false)

  const validations = useForm<SignInValidation>({
    mode: 'onBlur',
    defaultValues: signInDefaultValues,
    resolver: zodResolver(signInValidation)
  })

  async function handleFormAction(data: SignInValidation): Promise<void> {
    setLoading(true)
    try {
      const response = await signInUsecase.signIn(data)

      storage.set('account', response)
      notify('Logged in successfully!', 'success')
      router.push('/dashboard')
    } catch (error) {
      const _error = error as Error
      notify(_error.message)
    }
    setLoading(false)
  }

  return {
    ...validations,
    ...store,
    mounted,
    loading,
    setMounted,
    handleFormAction
  }
}
