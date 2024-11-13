import { componentWrapper } from '@/core'

export const metadata = {
  title: 'Orders'
}

const HomePage = componentWrapper(
  import('@/modules/orders').then((module) => module.HomePage)
)

export default HomePage
