'use client'

import { makeSignInUsecase } from '@/modules/auth/auth_module'
import { useSignInModel } from './sign_in_model'
import { SignInView } from './sign_in_view'
import { makeCookiesStorageAdapter } from '@/core'
import { useSignUpStore } from '../../store'

export const SignInViewModel = () => {
  const signInUsecase = makeSignInUsecase()
  const storage = makeCookiesStorageAdapter()
  const store = useSignUpStore()
  const methods = useSignInModel({ signInUsecase, storage, store })

  return <SignInView {...methods} />
}
