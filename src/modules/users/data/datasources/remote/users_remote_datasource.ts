import { HttpResponse, IHttpClient } from '@/core'
import { CreateUser, ResetPassword, UserList } from '@/modules/users/domain'

export interface IUsersRemoteDataSource {
  listUsers(params: UserList.Params): Promise<HttpResponse<UserList.Result>>

  createUser(params: CreateUser.Params): Promise<HttpResponse<boolean>>

  resetPassword(params: ResetPassword.Params): Promise<HttpResponse<boolean>>
}

export class UsersRemoteDataSource implements IUsersRemoteDataSource {
  constructor(
    private readonly baseUrl: string,
    private readonly httpClient: IHttpClient
  ) {}

  async listUsers(
    params: UserList.Params
  ): Promise<HttpResponse<UserList.Result>> {
    return await this.httpClient.request({
      url: `${this.baseUrl}/users/list?page=${params.page}&limit=${params.limit}`,
      method: 'GET'
    })
  }

  async createUser(params: CreateUser.Params): Promise<HttpResponse<boolean>> {
    return await this.httpClient.request({
      url: `${this.baseUrl}/users/create-user`,
      method: 'POST',
      body: params
    })
  }

  async resetPassword(
    params: ResetPassword.Params
  ): Promise<HttpResponse<boolean>> {
    return await this.httpClient.request({
      url: `${this.baseUrl}/users/alter-password`,
      method: 'PUT',
      body: params
    })
  }
}
