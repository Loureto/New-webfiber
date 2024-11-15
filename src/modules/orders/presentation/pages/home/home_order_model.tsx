import { OrdersList } from '@/modules/orders/domain'
import {
  IGetOrdersByIdUseCase,
  IGetOrdersByUserUseCase,
  IGetOrdersUseCase
} from '@/modules/orders/domain/usecases'
import { useQuery } from '@tanstack/react-query'
import { OrderActions } from '../../store'

export interface HomeModelProps {
  getOrders: IGetOrdersUseCase
  getOrderById: IGetOrdersByIdUseCase
  getOrderByUser: IGetOrdersByUserUseCase
  store: OrderActions
}

export const useHomeOrderModel = ({
  getOrders,
  getOrderById,
  getOrderByUser,
  store
}: HomeModelProps) => {
  const { data: ordersData, isLoading: ordersLoading } = useQuery({
    queryKey: ['get-order', store.currentPage, store.orderType],
    queryFn: async (): Promise<OrdersList> => {
      const response = await getOrders.execute({
        page: store.currentPage,
        limit: 10,
        orderType: store.orderType
      })
      store.setTotalPages(response.totalPages)
      return response
    },
    refetchOnWindowFocus: false,
    retry: false
  })

  return {
    ordersData,
    ordersLoading,
    ...store
  }
}
