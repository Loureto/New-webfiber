import { IOrdersRepository } from '../../domain/repositories'
import { IOrdersRemoteDatasource } from '../datasources'

export class OrdersRepository implements IOrdersRepository {
  private _datasource: IOrdersRemoteDatasource

  constructor(datasource: IOrdersRemoteDatasource) {
    this._datasource = datasource
  }
}
