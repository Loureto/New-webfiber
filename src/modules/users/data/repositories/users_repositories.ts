import { HttpStatusCode } from '@/core'
import {
  CreateUser,
  IUsersRepository,
  ResetPassword,
  UnexpectedError,
  UserList
} from '../../domain'
import { IUsersRemoteDataSource } from '../datasources'

export class UsersRepository implements IUsersRepository {
  constructor(private readonly datasource: IUsersRemoteDataSource) {}

  async listUsers(params: UserList.Params): Promise<UserList.Result> {
    const response = await this.datasource.listUsers(params)

    switch (response.statusCode) {
      case HttpStatusCode.OK:
        return response.body
      default:
        throw new UnexpectedError()
    }
  }

  async createUser(params: CreateUser.Params): Promise<boolean> {
    const response = await this.datasource.createUser(params)

    switch (response.statusCode) {
      case HttpStatusCode.CREATED:
        return response.statusCode === HttpStatusCode.CREATED
      case HttpStatusCode.FORBIDDEN:
        throw new UnexpectedError()
      default:
        throw new UnexpectedError()
    }
  }

  async resetPassword(params: ResetPassword.Params): Promise<boolean> {
    const response = await this.datasource.resetPassword(params)

    switch (response.statusCode) {
      case HttpStatusCode.OK:
        return response.statusCode === HttpStatusCode.OK
      case HttpStatusCode.FORBIDDEN:
        throw new UnexpectedError()
      default:
        throw new UnexpectedError()
    }
  }
}
