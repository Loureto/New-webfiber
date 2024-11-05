'use client'

import { useForm } from 'react-hook-form'
import {
  signInDefaultValues,
  signInValidation,
  SignInValidation
} from '../validations'
import { zodResolver } from '@hookform/resolvers/zod'

export const SignInModel = () => {
  const validations = useForm<SignInValidation>({
    mode: 'onBlur',
    defaultValues: signInDefaultValues,
    resolver: zodResolver(signInValidation)
  })

  function handleFormAction(data: SignInValidation) {
    console.log(data)
  }

  return {
    ...validations,
    handleFormAction
  }
}
