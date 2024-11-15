import { formatDate } from '@/core'

export class Orders {
  id: number
  title: string
  code: string
  type: string
  status: string
  state: string
  city: string
  openedBy: {
    id: number
    fullname: string
  }
  closedBy: {
    id: number
    fullname: string
  }
  createdAt: string
  updatedAt: string

  constructor(order: Orders) {
    this.id = order.id
    this.title = order.title
    this.code = order.code
    this.type = order.type
    this.status = order.status
    this.state = order.state
    this.city = order.city
    this.openedBy = order.openedBy
    this.closedBy = order.closedBy
    this.createdAt = order.createdAt
    this.updatedAt = order.updatedAt
  }

  get createdAtFormatted(): string {
    return formatDate(this.createdAt)
  }

  get updatedAtFormatted(): string {
    return formatDate(this.updatedAt)
  }
}
