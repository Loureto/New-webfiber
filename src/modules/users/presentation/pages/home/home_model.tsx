'use client'

import { IGetUserListUsecase, UserAccountInfo } from '@/modules/users/domain'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

interface HomeModelProps {
  getUserListUsecase: IGetUserListUsecase
}

export const useHomeModel = ({ getUserListUsecase }: HomeModelProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data: userList, ...query } = useQuery({
    queryKey: ['userList', currentPage],
    queryFn: async (): Promise<UserAccountInfo.Result> => {
      return await getUserListUsecase.listUsers({ page: currentPage, limit: 2 })
    },
    refetchOnWindowFocus: false,
    retry: false
  })

  return { userList, currentPage, setCurrentPage, ...query }
}
