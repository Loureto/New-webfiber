import { GetCookies, HttpRequest, HttpResponse, IHttpClient } from '@/core/data'

export class AuthorizeHttpClientDecorator implements IHttpClient {
  constructor(
    private readonly getStorage: GetCookies,
    private readonly httpClient: IHttpClient
  ) {}

  async request(data: HttpRequest): Promise<HttpResponse> {
    const account = this.getStorage.get('account')
    const token = JSON.parse(account || '{}')?.accessToken

    if (token) {
      Object.assign(data, {
        headers: Object.assign(data.headers || {}, {
          Authorization: `Bearer ${token}`
        })
      })
    }
    const httpResponse = await this.httpClient.request(data)
    return httpResponse
  }
}
