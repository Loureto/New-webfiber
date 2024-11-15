import { OrdersList } from '../entities/orders_list'
import { IOrdersRepository } from '../repositories'

export interface IGetOrdersUseCase {
  execute(params: any): Promise<OrdersList>
}

export class GetOrdersUseCase implements IGetOrdersUseCase {
  private _repository: IOrdersRepository

  constructor(repository: IOrdersRepository) {
    this._repository = repository
  }

  async execute(params: any): Promise<OrdersList> {
    return await this._repository.getOrders(params)
  }
}
