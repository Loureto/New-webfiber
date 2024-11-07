export class UserAccount {
  accessToken: string

  constructor(access_token: string) {
    this.accessToken = access_token
  }
}

export namespace UserAccount {
  export type Entity = UserAccount | undefined

  export type Params = {
    username: string
    password: string
  }
}
