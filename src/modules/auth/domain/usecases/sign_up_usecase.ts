import { CreateAccountCompany } from '../entities'
import { IAuthRepository } from '../repositories'

export interface ISignUpUsecase {
  signUp(params: CreateAccountCompany.Params): Promise<boolean>
}

export class SignUpUsecase implements ISignUpUsecase {
  private _repository: IAuthRepository

  constructor(repository: IAuthRepository) {
    this._repository = repository
  }

  async signUp(params: CreateAccountCompany.Params): Promise<boolean> {
    return this._repository.signUp(params)
  }
}
