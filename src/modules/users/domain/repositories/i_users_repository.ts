import { CreateUser, ResetPassword, UserList } from '../entities'

export interface IUsersRepository {
  listUsers(params: UserList.Params): Promise<UserList.Result>

  createUser(params: CreateUser.Params): Promise<boolean>

  resetPassword(params: ResetPassword.Params): Promise<boolean>
}
