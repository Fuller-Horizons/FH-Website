import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Redirect /blog to /perspectives (301 permanent redirect)
  if (pathname === '/blog') {
    return NextResponse.redirect(new URL('/perspectives', request.url), 301)
  }

  // Redirect /blog/[slug] to /perspectives/[slug] (301 permanent redirect)
  if (pathname.startsWith('/blog/')) {
    const slug = pathname.replace('/blog/', '')
    return NextResponse.redirect(new URL(`/perspectives/${slug}`, request.url), 301)
  }

  // Redirect /thinking to /insights (301 permanent redirect)
  if (pathname === '/thinking') {
    return NextResponse.redirect(new URL('/insights', request.url), 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/blog',
    '/blog/:path*',
    '/thinking',
  ],
}
