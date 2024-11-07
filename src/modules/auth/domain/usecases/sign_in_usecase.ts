import { UserAccount } from '../entities'
import { IAuthRepository } from '../repositories'

export interface ISignInUsecase {
  signIn(params: UserAccount.Params): Promise<UserAccount.Entity>
}

export class SignInUsecase implements ISignInUsecase {
  private _repository: IAuthRepository

  constructor(repository: IAuthRepository) {
    this._repository = repository
  }

  async signIn(params: UserAccount.Params): Promise<UserAccount.Entity> {
    return this._repository.signIn(params)
  }
}
