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

export namespace UserList {
  export type Params = {
    page: number
    limit: number
  }

  export type Result = UserList[] | undefined
}
