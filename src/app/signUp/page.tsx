import { componentWrapper } from '@/core'

export const metadata = {
  title: 'Sign Up'
}

const SignUpPage = componentWrapper(
  import('@/modules/auth').then((module) => module.SignUpViewModel)
)

export default SignUpPage
