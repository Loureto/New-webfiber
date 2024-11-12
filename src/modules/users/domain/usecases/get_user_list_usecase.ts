import { UserList } from '../entities'
import { IUsersRepository } from '../repositories'

export interface IGetUserListUsecase {
  listUsers(params: UserList.Params): Promise<UserList.Result>
}

export class GetUserListUsecase implements IGetUserListUsecase {
  private _repository: IUsersRepository
  constructor(repository: IUsersRepository) {
    this._repository = repository
  }

  async listUsers(params: UserList.Params): Promise<UserList.Result> {
    return await this._repository.listUsers(params)
  }
}
