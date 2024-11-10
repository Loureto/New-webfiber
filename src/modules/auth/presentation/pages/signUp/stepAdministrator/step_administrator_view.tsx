'use client'

import { useEffect } from 'react'
import { Controller } from 'react-hook-form'
import { Button, Input } from '@nextui-org/react'
import { useStepAdministratorModel } from './step_administrator_model'

export const StepAdministratorView = (
  methods: ReturnType<typeof useStepAdministratorModel>
) => {
  const { control, mounted, setMounted, handleSubmit, handleFormAction } =
    methods

  useEffect(() => {
    setMounted(true)
  }, [setMounted])

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit((data) => handleFormAction(data))}
    >
      <div className="flex gap-4">
        <Controller
          name="fullname"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Input
              label="Full Name"
              placeholder="Enter your company name"
              isInvalid={!!error?.message}
              errorMessage={error?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Input
              label="Email"
              placeholder="Enter your email"
              isInvalid={!!error?.message}
              errorMessage={error?.message}
              {...field}
            />
          )}
        />
      </div>

      <Controller
        name="phone"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Input
            label="Phone"
            placeholder="Enter your phone"
            isInvalid={!!error?.message}
            errorMessage={error?.message}
            {...field}
          />
        )}
      />

      <div className="flex gap-4">
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
              label="Password"
              placeholder="Enter your password"
              isInvalid={!!error?.message}
              errorMessage={error?.message}
              {...field}
            />
          )}
        />
      </div>

      <div className="flex gap-4">
        <Controller
          name="state"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Input
              label="State"
              placeholder="Enter your state"
              isInvalid={!!error?.message}
              errorMessage={error?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="city"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Input
              label="City"
              placeholder="Enter your city"
              isInvalid={!!error?.message}
              errorMessage={error?.message}
              {...field}
            />
          )}
        />
      </div>

      <Button type="submit" color="primary" disabled={!mounted}>
        Register
      </Button>
    </form>
  )
}
