import { IHttpClient } from '@/core/data'
import { AuthorizeHttpClientDecorator } from '../../decorators'
import { makeCookiesStorageAdapter } from '../cache'
import { makeAxiosHttpClient } from '../http'

export const makeAuthorizeHttpClientDecorator = (): IHttpClient =>
  new AuthorizeHttpClientDecorator(
    makeCookiesStorageAdapter(),
    makeAxiosHttpClient()
  )
