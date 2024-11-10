'use client'

import { makeSignUpUsecase } from '@/modules/auth/auth_module'
import { SignUpView } from './sign_up_view'
import { useSignUpStore } from '../../store'

export const SignUpViewModel = () => {
  const store = useSignUpStore()
  const signUpUsecase = makeSignUpUsecase()

  return <SignUpView store={store} signUpUsecase={signUpUsecase} />
}
