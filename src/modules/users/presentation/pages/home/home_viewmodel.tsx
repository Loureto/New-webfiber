'use client'

import { makeListUsers } from '@/modules/users/users_module'
import { useHomeModel } from './home_model'
import { HomePage } from './home_page'
import { useUserStore } from '../../store'

export const HomeViewModel = () => {
  const store = useUserStore()
  const methods = useHomeModel({ getUserListUsecase: makeListUsers(), store })
  return <HomePage methods={methods} />
}
