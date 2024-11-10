import { z } from 'zod'

export const companyValidation = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().min(1, { message: 'Email is required' })
})

export const companyDefaultValues = {
  name: '',
  email: ''
}

export type CompanyValidation = z.infer<typeof companyValidation>

export const adminValidation = z.object({
  username: z.string().min(1, { message: 'Username is required' }),
  fullname: z.string().min(1, { message: 'Fullname is required' }),
  email: z.string().min(1, { message: 'Email is required' }),
  password: z.string().min(1, { message: 'Password is required' }),
  phone: z.string().min(1, { message: 'Phone is required' }),
  city: z.string().min(1, { message: 'City is required' }),
  state: z.string().min(1, { message: 'State is required' })
})

export const adminDefaultValues = {
  username: '',
  fullname: '',
  email: '',
  password: '',
  phone: '',
  city: '',
  state: ''
}

export type AdminValidation = z.infer<typeof adminValidation>
