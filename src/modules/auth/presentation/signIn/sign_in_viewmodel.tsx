'use client'

import { SignInModel } from './sign_in_model'
import { SignInView } from './sign_in_view'

export const SignInViewModel = () => {
  const methods = SignInModel()

  return <SignInView {...methods} />
}
