import { CreateUser } from '../entities'
import { IUsersRepository } from '../repositories'

export interface IPostCreateUserUsecase {
  createUser(params: CreateUser.Params): Promise<boolean>
}

export class PostCreateUserUsecase implements IPostCreateUserUsecase {
  private _repository: IUsersRepository
  constructor(repository: IUsersRepository) {
    this._repository = repository
  }

  async createUser(params: CreateUser.Params): Promise<boolean> {
    return await this._repository.createUser(params)
  }
}
