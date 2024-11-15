'use client'

import {
  makeListOrderById,
  makeListOrders,
  makeListOrdersByUser
} from '@/modules/orders/orders_module'
import { useHomeOrderModel } from './home_order_model'
import { HomeOrderView } from './home_order_view'
import { useOrderStore } from '../../store'

export const HomeOrderViewModel = () => {
  const methods = useHomeOrderModel({
    getOrders: makeListOrders(),
    getOrderById: makeListOrderById(),
    getOrderByUser: makeListOrdersByUser(),
    store: useOrderStore()
  })

  return <HomeOrderView {...methods} />
}
