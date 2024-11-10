'use client'

import { ISignUpUsecase } from '@/modules/auth/domain'
import { SignUpStore } from '../../../store'
import { useStepAdministratorModel } from './step_administrator_model'
import { StepAdministratorView } from './step_administrator_view'

interface StepAdministratorViewModelProps {
  signUpUsecase: ISignUpUsecase
  store: SignUpStore
}

export const StepAdministratorViewModel = ({
  store,
  signUpUsecase
}: StepAdministratorViewModelProps) => {
  const methods = useStepAdministratorModel({ signUpUsecase, store })
  return <StepAdministratorView {...methods} />
}
