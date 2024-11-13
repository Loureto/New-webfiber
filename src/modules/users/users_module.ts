import { makeApiBaseUrl, makeAuthorizeHttpClientDecorator } from '@/core'
import {
  IUsersRemoteDataSource,
  UsersRemoteDataSource,
  UsersRepository
} from './data'
import {
  GetUserListUsecase,
  IGetUserListUsecase,
  IPostCreateUserUsecase,
  IPutResetPasswordUsecase,
  IUsersRepository,
  PostCreateUserUsecase,
  PutResetPasswordUsecase
} from './domain'

const makeUserRemoteDataSource = (): IUsersRemoteDataSource => {
  return new UsersRemoteDataSource(
    makeApiBaseUrl(),
    makeAuthorizeHttpClientDecorator()
  )
}

const makeUserRepository = (): IUsersRepository => {
  return new UsersRepository(makeUserRemoteDataSource())
}

export const makeListUsers = (): IGetUserListUsecase => {
  return new GetUserListUsecase(makeUserRepository())
}

export const makeCreateUser = (): IPostCreateUserUsecase => {
  return new PostCreateUserUsecase(makeUserRepository())
}

export const makeResetPassword = (): IPutResetPasswordUsecase => {
  return new PutResetPasswordUsecase(makeUserRepository())
}
