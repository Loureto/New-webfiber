import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type OrderType = 'Map' | 'Qos' | 'MakeReady'

export interface OrderActions {
  totalPages: number
  setTotalPages: (totalPages: number) => void
  currentPage: number
  setCurrentPage: (currentPage: number) => void
  orderType: string
  setOrderType: (orderType: string) => void
}

export const useOrderStore = create(
  persist<OrderActions>(
    (set) => ({
      totalPages: 0,
      currentPage: 1,
      orderType: 'MakeReady',
      setOrderType: (orderType: string) => set({ orderType, currentPage: 1 }),
      setCurrentPage: (currentPage: number) => set({ currentPage }),
      setTotalPages: (totalPages: number) => set({ totalPages })
    }),
    { name: 'order-pagination' }
  )
)
