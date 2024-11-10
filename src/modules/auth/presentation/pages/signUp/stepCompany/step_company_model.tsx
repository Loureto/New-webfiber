'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  companyDefaultValues,
  companyValidation,
  CompanyValidation
} from '@/modules/auth/validations'
import { SignUpStore } from '../../../store'
import { useRouter } from 'next/navigation'

export const useStepCompanyModel = (store: SignUpStore) => {
  const router = useRouter()
  const [mounted, setMounted] = React.useState(false)

  const validations = useForm<CompanyValidation>({
    mode: 'onBlur',
    defaultValues: companyDefaultValues,
    resolver: zodResolver(companyValidation)
  })

  function handleFormCompany(data: CompanyValidation) {
    store.setCompanyData(data)
    store.setIncrement()
  }

  return {
    ...validations,
    ...store,
    router,
    mounted,
    setMounted,
    handleFormCompany
  }
}
