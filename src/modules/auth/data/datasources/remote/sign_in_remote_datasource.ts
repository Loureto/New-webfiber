import { HttpResponse, IHttpClient } from '@/core'
import { UserAccount } from '@/modules/auth/domain'

export interface IAuthRemoteDataSource {
  signIn(params: UserAccount.Params): Promise<HttpResponse<UserAccount.Entity>>
}

export class AuthRemoteDataSource implements IAuthRemoteDataSource {
  constructor(
    private readonly baseUrl: string,
    private readonly httpClient: IHttpClient
  ) {}

  async signIn(
    params: UserAccount.Params
  ): Promise<HttpResponse<UserAccount.Entity>> {
    return await this.httpClient.request({
      url: `${this.baseUrl}/auth/login`,
      method: 'POST',
      body: params
    })
  }
}
