import { NextRequest, NextResponse } from 'next/server'

const publicRoute = ['/sign-in', '/sign-up']

export default function middleware(request: NextRequest) {
  const account = request.cookies.get('account')?.value
  const token = JSON.parse(account || '{}')?.access_token

  const signInURL = new URL('/signIn', request.url)
  const dashboardtURL = new URL('/dashboard', request.url)

  if (!token) {
    if (publicRoute.includes(request.nextUrl.pathname)) {
      return NextResponse.next()
    }
    return NextResponse.redirect(signInURL)
  }

  if (publicRoute.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(dashboardtURL)
  }
}

export const config = {
  matcher: [
    '/sign-in',
    '/sign-up',
    '/auth/:path*',
    '/dashboard/:path*',
    '/orders/:path*',
    '/tickets/:path*',
    '/users/:path*'
  ]
}
