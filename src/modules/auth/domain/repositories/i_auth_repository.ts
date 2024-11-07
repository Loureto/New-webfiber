import { UserAccount } from '../entities'

export interface IAuthRepository {
  signIn(params: UserAccount.Params): Promise<UserAccount.Entity>
}
