'use client'

import { makeSignInUsecase } from '@/modules/auth/auth_module'
import { useSignInModel } from './use_sign_in_model'
import { SignInView } from './sign_in_view'
import { makeCookiesStorageAdapter } from '@/core'

export const SignInViewModel = () => {
  const signInUsecase = makeSignInUsecase()
  const storage = makeCookiesStorageAdapter()
  const methods = useSignInModel({ signInUsecase, storage })

  return <SignInView {...methods} />
}
