import { makeApiBaseUrl, makeAxiosHttpClient } from '@/core'
import {
  AuthRemoteDataSource,
  AuthRepository,
  IAuthRemoteDataSource
} from './data'
import { IAuthRepository, ISignInUsecase, SignInUsecase } from './domain'

export const makeAuthRemoteDataSource = (): IAuthRemoteDataSource => {
  return new AuthRemoteDataSource(makeApiBaseUrl(), makeAxiosHttpClient())
}

export const makeAuthRepository = (): IAuthRepository => {
  const datasource = makeAuthRemoteDataSource()
  return new AuthRepository(datasource)
}

export const makeSignInUsecase = (): ISignInUsecase => {
  const repository = makeAuthRepository()
  return new SignInUsecase(repository)
}
