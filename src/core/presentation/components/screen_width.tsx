'use client'

import { WarningIcon } from '../assets'

export const ScreenWidth = () => {
  return (
    <div className="absolute top-0 z-[999] flex h-screen w-full items-center justify-center md:hidden">
      <div className="absolute z-[999] flex flex-col items-center gap-4">
        <WarningIcon />
        <h1>Your screen is too small</h1>
        <p className="subtitle">
          Please access Ninja Fiber from desktop device
        </p>
      </div>
      <div className="h-screen w-full bg-black/90 blur-lg" />
    </div>
  )
}
