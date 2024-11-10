'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Controller } from 'react-hook-form'
import { Button, Input } from '@nextui-org/react'
import { useStepCompanyModel } from './step_company_model'
import { CompanyValidation } from '@/modules/auth/validations'

export const StepCompanyView = (
  methods: ReturnType<typeof useStepCompanyModel>
) => {
  const {
    control,
    mounted,
    companyData,
    setValue,
    setMounted,
    handleSubmit,
    handleFormCompany
  } = methods

  const ref = useRef<CompanyValidation>()
  ref.current = companyData

  useEffect(() => {
    setMounted(true)
    setValue('name', ref.current?.name || '')
    setValue('email', ref.current?.email || '')
  }, [setMounted, setValue])

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit((data) => handleFormCompany(data))}
    >
      <Controller
        name="name"
        control={control}
        render={({ field: { value, ...field }, fieldState: { error } }) => (
          <Input
            label="Company Name"
            value={value || companyData.name}
            placeholder="Enter your company name"
            isInvalid={!!error?.message}
            errorMessage={error?.message}
            {...field}
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field: { value, ...field }, fieldState: { error } }) => (
          <Input
            label="Company Email"
            value={value || companyData.email}
            placeholder="Enter your company email"
            isInvalid={!!error?.message}
            errorMessage={error?.message}
            {...field}
          />
        )}
      />

      <Button type="submit" color="primary" disabled={!mounted}>
        Continue
      </Button>

      <p className="txt-regular text-center">
        Already have an account? <Link href="/signIn">Sign In</Link>
      </p>
    </form>
  )
}
