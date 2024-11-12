export interface IOrdersRepository {
  createOrder: (data: FormData) => Promise<boolean>

  getOrders: () => Promise<any[]>

  getOrderById: (id: string) => Promise<any[]>

  //   getOrderByUser: (id: string) => Promise<any>
}
