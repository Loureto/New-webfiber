'use client'

import { makeListUsers } from '@/modules/users/users_module'
import { useHomeUserModel } from './home_user_model'
import { HomeUserView } from './home_user_view'
import { useUserStore } from '../../store'

export const HomeUserViewModel = () => {
  const store = useUserStore()
  const methods = useHomeUserModel({
    getUserListUsecase: makeListUsers(),
    store
  })
  return <HomeUserView methods={methods} />
}
