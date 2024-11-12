import { ResetPassword } from '../entities'
import { IUsersRepository } from '../repositories'

export interface IPutResetPasswordUsecase {
  resetPassword(params: ResetPassword.Params): Promise<boolean>
}

export class PutResetPasswordUsecase implements IPutResetPasswordUsecase {
  private _repository: IUsersRepository

  constructor(repository: IUsersRepository) {
    this._repository = repository
  }
  async resetPassword(params: ResetPassword.Params): Promise<boolean> {
    return await this._repository.resetPassword(params)
  }
}
