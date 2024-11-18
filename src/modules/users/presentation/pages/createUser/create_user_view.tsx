'use client'

import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react'
import { Controller, useForm } from 'react-hook-form'

interface CreateUserProps {
  isOpen: boolean
  onOpenChange: () => void
}

export const CreateUserView = ({ isOpen, onOpenChange }: CreateUserProps) => {
  const { control } = useForm()

  return (
    <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalHeader>Create user account</ModalHeader>
        <ModalBody>
          <form className="flex flex-col gap-4">
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

            <Button type="submit" color="primary">
              Register
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
