'use client'

import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react'
import { useEffect } from 'react'
import { Controller } from 'react-hook-form'
import { useCreateUserModel } from './create_user_model'

interface CreateUserProps {
  isOpen: boolean
  onOpenChange: () => void
  onClose: () => void
  methods: ReturnType<typeof useCreateUserModel>
}

export const CreateUserView = ({
  isOpen,
  onOpenChange,
  onClose,
  methods
}: CreateUserProps) => {
  const { isSuccess, isPending, control, reset, handleSubmit, mutate } = methods

  useEffect(() => {
    if (isSuccess) {
      reset()
    }
  }, [isSuccess, reset])

  return (
    <Modal
      size="4xl"
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={false}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          Create user account
          <span className="text-sm font-normal text-zinc-300">
            Add a new user and define their access permissions in the system.
          </span>
        </ModalHeader>

        <ModalBody className="mt-2">
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit((data) => mutate(data))}
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

            <div className="mt-3 flex gap-4">
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
            </div>

            <div className="my-3 flex justify-end gap-4">
              <Button
                type="button"
                color="danger"
                variant="light"
                onClick={onClose}
                isDisabled={isPending}
              >
                Close
              </Button>
              <Button type="submit" color="primary" isDisabled={isPending}>
                Save
              </Button>
            </div>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
