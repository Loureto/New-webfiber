import { OrdersList } from '../entities/orders_list'
import { IOrdersRepository } from '../repositories'

export interface IGetOrdersByUserUseCase {
  execute: (id: string) => Promise<OrdersList>
}

export class GetOrdersByUserUseCase implements IGetOrdersByUserUseCase {
  private _repository: IOrdersRepository

  constructor(repository: IOrdersRepository) {
    this._repository = repository
  }

  async execute(id: string): Promise<OrdersList> {
    return await this._repository.getOrderByUser(id)
  }
}
