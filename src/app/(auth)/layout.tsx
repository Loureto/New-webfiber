'use client'

import { SidebarNavigation } from '@/core'

export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-screen w-full gap-6">
      <SidebarNavigation />

      <main className="flex-1 bg-zinc-900 px-6 py-10">{children}</main>
    </div>
  )
}
