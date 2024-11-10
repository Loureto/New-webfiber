'use client'

import { ShurikenIcon } from '@/core'
import { ISignUpUsecase } from '@/modules/auth/domain'
import { SignUpStore } from '../../store'
import { StepAdministratorViewModel } from './stepAdministrator/step_administrator_viewmodel'
import { StepCompanyViewModel } from './stepCompany'
import { ArrowLeftIcon } from '@/core/presentation/assets/icons/arrow_left_icon'

interface SignUpViewProps {
  signUpUsecase: ISignUpUsecase
  store: SignUpStore
}

export const SignUpView = ({ store, signUpUsecase }: SignUpViewProps) => {
  return (
    <div className="flex h-screen w-full items-center justify-center py-20">
      <div className="relative w-[496px] rounded-large bg-zinc-900 px-6 py-10">
        {store.step > 1 && (
          <button
            className="absolute left-5 top-5 flex items-center"
            onClick={() => store.setDecrement()}
          >
            <ArrowLeftIcon className="size-5" />
          </button>
        )}
        <ShurikenIcon className="mx-auto mb-4" />
        <section className="mb-10 text-center">
          <h1 className="mb-2">Create Account</h1>
          <p className="subtitle">Sign up for a new account to get started</p>
        </section>

        {store.step === 1 && <StepCompanyViewModel store={store} />}

        {store.step === 2 && (
          <StepAdministratorViewModel
            signUpUsecase={signUpUsecase}
            store={store}
          />
        )}
      </div>
    </div>
  )
}
