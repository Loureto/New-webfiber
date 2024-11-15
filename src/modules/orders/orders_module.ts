import { makeApiBaseUrl, makeAuthorizeHttpClientDecorator } from '@/core'
import {
  IOrdersRemoteDatasource,
  OrdersRemoteDatasource
} from './data/datasources'
import { OrdersRepository } from './data/repositories'
import { IOrdersRepository } from './domain/repositories'
import {
  GetOrdersByIdUseCase,
  GetOrdersByUserUseCase,
  GetOrdersUseCase,
  IGetOrdersByIdUseCase,
  IGetOrdersByUserUseCase,
  IGetOrdersUseCase
} from './domain/usecases'

const makeOrdersRemoteDataSource = (): IOrdersRemoteDatasource => {
  return new OrdersRemoteDatasource(
    makeApiBaseUrl(),
    makeAuthorizeHttpClientDecorator()
  )
}

const makeOrdersRepository = (): IOrdersRepository => {
  return new OrdersRepository(makeOrdersRemoteDataSource())
}

export const makeListOrders = (): IGetOrdersUseCase => {
  return new GetOrdersUseCase(makeOrdersRepository())
}

export const makeListOrderById = (): IGetOrdersByIdUseCase => {
  return new GetOrdersByIdUseCase(makeOrdersRepository())
}

export const makeListOrdersByUser = (): IGetOrdersByUserUseCase => {
  return new GetOrdersByUserUseCase(makeOrdersRepository())
}
