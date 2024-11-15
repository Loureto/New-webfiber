import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface UserActions {
  totalPages: number
  setTotalPages: (totalPages: number) => void
  currentPage: number
  setCurrentPage: (currentPage: number) => void
}

export const useUserStore = create(
  persist<UserActions>(
    (set) => ({
      totalPages: 0,
      currentPage: 1,
      setCurrentPage: (currentPage: number) => set({ currentPage }),
      setTotalPages: (totalPages: number) => set({ totalPages })
    }),
    { name: 'user-pagination' }
  )
)
