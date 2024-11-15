import { OrdersList } from '../entities/orders_list'
import { IOrdersRepository } from '../repositories'

export interface IGetOrdersByIdUseCase {
  execute: (id: string) => Promise<OrdersList>
}

export class GetOrdersByIdUseCase implements IGetOrdersByIdUseCase {
  private _repository: IOrdersRepository

  constructor(repository: IOrdersRepository) {
    this._repository = repository
  }

  async execute(id: string): Promise<OrdersList> {
    return await this._repository.getOrderById(id)
  }
}
