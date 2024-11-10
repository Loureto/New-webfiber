import { CreateAccountCompany, UserAccount } from '../entities'

export interface IAuthRepository {
  signIn(params: UserAccount.Params): Promise<UserAccount.Entity>

  signUp(params: CreateAccountCompany.Params): Promise<boolean>
}
