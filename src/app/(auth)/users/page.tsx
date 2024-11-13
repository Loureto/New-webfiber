import { componentWrapper } from '@/core'

export const metadata = {
  title: 'Orders'
}

const HomePage = componentWrapper(
  import('@/modules/users').then((module) => module.HomeViewModel)
)

export default HomePage
