import { CookieStorageAdapter } from '@/core/infra'

export const makeCookiesStorageAdapter = (): CookieStorageAdapter =>
  new CookieStorageAdapter()
