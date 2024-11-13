'use client'

import { IGetUserListUsecase, UserAccountInfo } from '@/modules/users/domain'
import { useQuery } from '@tanstack/react-query'

interface HomeModelProps {
  getUserListUsecase: IGetUserListUsecase
}

export const useHomeModel = ({ getUserListUsecase }: HomeModelProps) => {
  const { data: userList, ...query } = useQuery({
    queryKey: ['userList'],
    queryFn: async (): Promise<UserAccountInfo.Result> => {
      return await getUserListUsecase.listUsers({ page: 1, limit: 10 })
    },
    refetchOnWindowFocus: false,
    retry: false
  })

  return { userList, ...query }
}
