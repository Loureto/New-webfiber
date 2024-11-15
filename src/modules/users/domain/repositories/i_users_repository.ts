import { CreateUser, ResetPassword, UserAccountInfo } from '../entities'

export interface IUsersRepository {
  listUsers(params: UserAccountInfo.Params): Promise<UserAccountInfo.Result>

  createUser(params: CreateUser.Params): Promise<boolean>

  resetPassword(params: ResetPassword.Params): Promise<boolean>
}
