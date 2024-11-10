'use client'

import { SignUpStore } from '../../../store'
import { useStepCompanyModel } from './step_company_model'
import { StepCompanyView } from './step_company_view'

interface StepCompanyViewModelProps {
  store: SignUpStore
}

export const StepCompanyViewModel = ({ store }: StepCompanyViewModelProps) => {
  const methods = useStepCompanyModel(store)
  return <StepCompanyView {...methods} />
}
