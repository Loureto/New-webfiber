import { create } from 'zustand'
import { CompanyValidation } from '../../validations'
import { persist } from 'zustand/middleware'

export interface SignUpStore {
  companyData: CompanyValidation
  setCompanyData: (data: CompanyValidation) => void
  step: number
  setIncrement: () => void
  setDecrement: () => void
  reset: () => void
}

const companyData: CompanyValidation = {
  name: '',
  email: ''
}

export const useSignUpStore = create(
  persist<SignUpStore>(
    (set) => ({
      companyData,
      step: 1,

      setIncrement: () => set((state) => ({ step: state.step + 1 })),

      setDecrement: () => set((state) => ({ step: state.step - 1 })),

      setCompanyData: (data: CompanyValidation) => set({ companyData: data }),

      reset: () => set({ companyData, step: 1 })
    }),
    {
      name: 'sign-up-store'
    }
  )
)
