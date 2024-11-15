import { HttpStatusCode } from '@/core'
import { IOrdersRepository } from '../../domain/repositories'
import { IOrdersRemoteDatasource } from '../datasources'
import { UnexpectedError } from '../../domain/errors'
import { OrdersList } from '../../domain/entities/orders_list'

export class OrdersRepository implements IOrdersRepository {
  constructor(private readonly datasource: IOrdersRemoteDatasource) {}

  async getOrders(params: any): Promise<OrdersList> {
    const response = await this.datasource.getOrders(params)

    switch (response.statusCode) {
      case HttpStatusCode.OK:
        return new OrdersList({ ...response.body! })
      case HttpStatusCode.FORBIDDEN:
        throw new UnexpectedError()
      default:
        throw new UnexpectedError()
    }
  }

  async getOrderById(id: string): Promise<OrdersList> {
    const response = await this.datasource.getOrderById(id)

    switch (response.statusCode) {
      case HttpStatusCode.CREATED:
        return response.body!
      case HttpStatusCode.FORBIDDEN:
        throw new UnexpectedError()
      default:
        throw new UnexpectedError()
    }
  }

  async getOrderByUser(id: string): Promise<OrdersList> {
    const response = await this.datasource.getOrderByUser(id)

    switch (response.statusCode) {
      case HttpStatusCode.CREATED:
        return response.body!
      case HttpStatusCode.FORBIDDEN:
        throw new UnexpectedError()
      default:
        throw new UnexpectedError()
    }
  }
}
