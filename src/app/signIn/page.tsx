import { componentWrapper } from '@/core'

export const metadata = {
  title: 'Sign In'
}

const SignInPage = componentWrapper(
  import('@/modules/auth').then((module) => module.SignInView)
)

export default SignInPage
