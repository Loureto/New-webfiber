'use client'

import { IGetUserListUsecase, UserAccountInfo } from '@/modules/users/domain'
import { useQuery } from '@tanstack/react-query'
import { UserActions } from '../../store'

interface HomeModelProps {
  getUserListUsecase: IGetUserListUsecase
  store: UserActions
}

export const useHomeModel = ({ getUserListUsecase, store }: HomeModelProps) => {
  const { data: userList, ...query } = useQuery({
    queryKey: ['userList', store.currentPage],
    queryFn: async (): Promise<UserAccountInfo.Result> => {
      const response = await getUserListUsecase.listUsers({
        page: store.currentPage,
        limit: 2
      })
      store.setTotalPages(response.totalPages)
      return response
    },
    refetchOnWindowFocus: false,
    retry: false
  })

  return { userList, ...query, ...store }
}
