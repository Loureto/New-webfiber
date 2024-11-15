import { OrdersList } from '../entities/orders_list'

export interface IOrdersRepository {
  // createOrder: (data: FormData) => Promise<boolean>

  getOrders: (params: any) => Promise<OrdersList>

  getOrderById: (id: string) => Promise<OrdersList>

  getOrderByUser: (id: string) => Promise<OrdersList>
}
