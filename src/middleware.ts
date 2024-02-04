import { type NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const publicRoutes = ['auth']
  const urlPath = request.url.split('/')[request.url.split('/').length - 1]
  const isPublic = publicRoutes.find((url) => url === urlPath)

  const isAuthenticate = request.cookies.get('jwt')

  if (!isPublic && !isAuthenticate) {
    return NextResponse.redirect(new URL('/auth', request.url))
  }
}

export const config = {
  matcher: ['/', '/product', '/client', '/assistant', '/auth'],
}
