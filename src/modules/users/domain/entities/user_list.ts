export class UserList {
  id: number
  username: string
  fullname: string
  phone: string
  role: string
  status: string

  constructor(
    id: number,
    username: string,
    fullname: string,
    phone: string,
    role: string,
    status: string
  ) {
    this.id = id
    this.username = username
    this.fullname = fullname
    this.phone = phone
    this.role = role
    this.status = status
  }
}

export class UserAccountInfo {
  user: UserList[]

  constructor(user: UserList[]) {
    this.user = user
  }
}

export namespace UserAccountInfo {
  export type Params = {
    page: number
    limit: number
  }

  export type Result = UserAccountInfo | undefined
}
