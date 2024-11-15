import { HttpResponse, IHttpClient } from '@/core'
import { OrdersList } from '@/modules/orders/domain/entities/orders_list'

export interface IOrdersRemoteDatasource {
  getOrders: (params: any) => Promise<HttpResponse<OrdersList>>

  getOrderById: (id: string) => Promise<HttpResponse<OrdersList>>

  getOrderByUser: (id: string) => Promise<HttpResponse<OrdersList>>
}

export class OrdersRemoteDatasource implements IOrdersRemoteDatasource {
  constructor(
    private readonly baseUrl: string,
    private readonly httpClient: IHttpClient
  ) {}

  async getOrders(params: any): Promise<HttpResponse<OrdersList>> {
    return await this.httpClient.request({
      url: `${this.baseUrl}/orders/list?page=${params.page}&limit=${params.limit}&type=${params.orderType}`,
      method: 'GET'
    })
  }

  async getOrderById(id: string): Promise<HttpResponse<OrdersList>> {
    return await this.httpClient.request({
      url: `${this.baseUrl}/orders/fetch?orderId=${id}`,
      method: 'GET'
    })
  }

  async getOrderByUser(id: string): Promise<HttpResponse<OrdersList>> {
    return await this.httpClient.request({
      url: `${this.baseUrl}/orders/fetchByUser${id}`,
      method: 'GET'
    })
  }
}
