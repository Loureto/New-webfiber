'use client'

import { makeListUsers } from '@/modules/users/users_module'
import { useHomeModel } from './home_model'
import { HomePage } from './home_page'

export const HomeViewModel = () => {
  const methods = useHomeModel({ getUserListUsecase: makeListUsers() })
  return <HomePage methods={methods} />
}
