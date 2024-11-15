import { Orders } from './orders'

export class OrdersList {
  orders: Orders[]
  totalOrders: number
  totalPages: number
  currentPage: number
  pageSize: number

  constructor(props: OrdersList) {
    this.orders = props.orders.map((order) => new Orders(order))
    this.totalOrders = props.totalOrders
    this.totalPages = props.totalPages
    this.currentPage = props.currentPage
    this.pageSize = props.pageSize
  }
}
