import { HttpStatusCode } from '@/core'
import { IAuthRemoteDataSource } from '../datasources'
import {
  CreateAccountCompany,
  ForbiddenError,
  IAuthRepository,
  InvalidCredentialsError,
  UnexpectedError,
  UserAccount
} from '../../domain'

export class AuthRepository implements IAuthRepository {
  constructor(private readonly datasource: IAuthRemoteDataSource) {}

  async signIn(params: UserAccount.Params): Promise<UserAccount.Entity> {
    const response = await this.datasource.signIn(params)

    switch (response.statusCode) {
      case HttpStatusCode.OK:
        return response.body
      case HttpStatusCode.UNAUTHORIZED:
        throw new InvalidCredentialsError()
      default:
        throw new UnexpectedError()
    }
  }

  async signUp(params: CreateAccountCompany.Params): Promise<boolean> {
    const response = await this.datasource.signUp(params)

    switch (response.statusCode) {
      case HttpStatusCode.CREATED:
        return !!response.body
      case HttpStatusCode.FORBIDDEN:
        throw new ForbiddenError()
      default:
        throw new UnexpectedError()
    }
  }
}
