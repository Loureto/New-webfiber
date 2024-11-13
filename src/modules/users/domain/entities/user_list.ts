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
  data: UserList[]
  total: number
  page: number
  limit: number
  totalPages: number

  constructor(
    data: UserList[],
    total: number,
    page: number,
    limit: number,
    totalPages: number
  ) {
    this.data = data
    this.total = total
    this.page = page
    this.limit = limit
    this.totalPages = totalPages
  }
}

export namespace UserAccountInfo {
  export type Params = {
    page: number
    limit: number
  }

  export type Result = UserAccountInfo | undefined
}
