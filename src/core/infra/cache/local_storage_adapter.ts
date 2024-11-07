import { GetCookies, SetCookies } from '@/core/data'
import Cookies from 'js-cookie'
export class CookieStorageAdapter implements SetCookies, GetCookies {
  set(key: string, value?: object): void {
    if (value) {
      Cookies.set(key, JSON.stringify(value))
      return
    }

    Cookies.remove(key)
  }

  get(key: string): any {
    return Cookies.get(key)
  }
}
