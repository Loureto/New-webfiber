import { componentWrapper } from '@/core'

export const metadata = {
  title: 'Users'
}

const HomeUserPage = componentWrapper(
  import('@/modules/users').then((module) => module.HomeUserViewModel)
)

export default HomeUserPage
