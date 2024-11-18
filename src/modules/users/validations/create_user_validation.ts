import { z } from 'zod'

export const createUserValidation = z.object({
  username: z.string().min(1, { message: 'Username is required' }),
  fullname: z.string().min(1, { message: 'Fullname is required' }),
  email: z.string().min(1, { message: 'Email is required' }),
  password: z.string().min(1, { message: 'Password is required' }),
  phone: z.string().min(1, { message: 'Phone is required' }),
  city: z.string().min(1, { message: 'City is required' }),
  state: z.string().min(1, { message: 'State is required' })
})

export const createUserDefaultValues = {
  username: '',
  fullname: '',
  email: '',
  password: '',
  phone: '',
  city: '',
  state: ''
}

export type CreateUserValidation = z.infer<typeof createUserValidation>
