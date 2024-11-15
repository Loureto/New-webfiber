import { componentWrapper } from '@/core'

export const metadata = {
  title: 'Orders'
}

const HomeOrdersPage = componentWrapper(
  import('@/modules/orders').then((module) => module.HomeOrderViewModel)
)

export default HomeOrdersPage
