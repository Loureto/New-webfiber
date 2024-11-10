import { z } from 'zod'

export const signInValidation = z.object({
  username: z.string().min(1, { message: 'Username is required' }),
  password: z.string().min(1, { message: 'Password is required' })
})

export type SignInValidation = z.infer<typeof signInValidation>

export const signInDefaultValues = {
  username: '',
  password: ''
}
