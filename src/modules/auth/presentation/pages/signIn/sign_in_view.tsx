'use client'

import { ShurikenIcon } from '@/core'
import { Button, Checkbox, Input } from '@nextui-org/react'
import Link from 'next/link'
import { useEffect } from 'react'
import { Controller } from 'react-hook-form'
import { useSignInModel } from './sign_in_model'

export const SignInView = (methods: ReturnType<typeof useSignInModel>) => {
  const {
    control,
    mounted,
    loading,
    reset,
    setValue,
    setMounted,
    handleSubmit,
    handleFormAction
  } = methods

  useEffect(() => {
    setMounted(true)
  }, [setMounted, setValue])

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="w-[496px] rounded-large bg-zinc-900 px-6 py-10">
        <ShurikenIcon className="mx-auto mb-4" />
        <section className="mb-10 text-center">
          <h1 className="mb-2">Welcome Back</h1>
          <p className="subtitle">Log in to your account to continue</p>
        </section>

        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(handleFormAction)}
        >
          <Controller
            name="username"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Input
                label="Username"
                placeholder="Enter your username"
                isInvalid={!!error?.message}
                errorMessage={error?.message}
                {...field}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Input
                type="password"
                label="Password"
                placeholder="Enter your password"
                isInvalid={!!error?.message}
                errorMessage={error?.message}
                {...field}
              />
            )}
          />

          <div className="flex justify-between">
            <Checkbox size="sm" value="buenos-aires">
              Remenber me
            </Checkbox>
            <Link className="txt-regular" href="/forgotPassword">
              Forgot Password?
            </Link>
          </div>

          <Button
            type="submit"
            color="primary"
            disabled={!mounted || loading}
            isLoading={loading}
          >
            Log In
          </Button>

          <p className="txt-regular text-center">
            Need to create an account?{' '}
            <Link
              onClick={() => {
                reset()
                window.localStorage.clear()
              }}
              href="/signUp"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
