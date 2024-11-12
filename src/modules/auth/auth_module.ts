import { makeApiBaseUrl, makeAxiosHttpClient } from '@/core'
import {
  AuthRemoteDataSource,
  AuthRepository,
  IAuthRemoteDataSource
} from './data'
import {
  IAuthRepository,
  ISignInUsecase,
  ISignUpUsecase,
  SignInUsecase,
  SignUpUsecase
} from './domain'

const makeAuthRemoteDataSource = (): IAuthRemoteDataSource => {
  return new AuthRemoteDataSource(makeApiBaseUrl(), makeAxiosHttpClient())
}

const makeAuthRepository = (): IAuthRepository => {
  const datasource = makeAuthRemoteDataSource()
  return new AuthRepository(datasource)
}

export const makeSignInUsecase = (): ISignInUsecase => {
  const repository = makeAuthRepository()
  return new SignInUsecase(repository)
}

export const makeSignUpUsecase = (): ISignUpUsecase => {
  const repository = makeAuthRepository()
  return new SignUpUsecase(repository)
}
