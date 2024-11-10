'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { notify } from '@/core'
import { ISignUpUsecase } from '@/modules/auth/domain'
import {
  adminDefaultValues,
  AdminValidation,
  adminValidation
} from '@/modules/auth/validations'
import { SignUpStore } from '../../../store'

interface StepAdministratorProps {
  signUpUsecase: ISignUpUsecase
  store: SignUpStore
}

export const useStepAdministratorModel = ({
  signUpUsecase,
  store
}: StepAdministratorProps) => {
  const router = useRouter()
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState<boolean>(false)

  const validations = useForm<AdminValidation>({
    mode: 'onBlur',
    defaultValues: adminDefaultValues,
    resolver: zodResolver(adminValidation)
  })

  async function handleFormAction(data: AdminValidation): Promise<void> {
    setLoading(true)
    try {
      await signUpUsecase.signUp({
        company: { ...store.companyData },
        adminUser: { ...data }
      })

      notify('Registered successfully!', 'success')
      router.replace('/signIn')
    } catch (error) {
      const _error = error as Error
      notify(_error.message)
    }
    setLoading(false)
  }

  return {
    ...validations,
    mounted,
    loading,
    ...store,
    setMounted,
    handleFormAction
  }
}
