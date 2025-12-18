import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

/**
 * Next.js Middleware Function
 *
 * This function runs on EVERY request that matches the config.matcher
 * It runs BEFORE the page or API route is executed
 *
 * In Next.js 16, you can also name this file proxy.js
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Log every request (helpful for debugging)
  console.log(`[Middleware] ${request.method} ${pathname}`)

  // Example 1: Rewrite old URLs to new ones
  // User sees /old-page but actually gets /new-page content
  if (pathname === "/old-page") {
    return NextResponse.rewrite(new URL("/new-page", request.url))
  }
  
  // Example 2: Authentication check for protected routes
  // Check if user is trying to access dashboard
  if (pathname.startsWith("/dashboard")) {

    const token = request.cookies.get("auth-token")

    if (!token) {
      // No token found - redirect to login
      const loginUrl = new URL("/login", request.url)
      loginUrl.searchParams.set("redirect", pathname)
      return NextResponse.redirect(loginUrl)
    }

    // Token exists - allow access and add custom header
    const response = NextResponse.next()
    response.headers.set("X-User-Authenticated", "true")
    return response
  }

  // Example 3: Role-based authorization
  if (pathname.startsWith("/admin")) {
    const role = request.cookies.get("user-role")

    if (role?.value !== "admin") {
      // Not an admin - redirect to home with error
      const homeUrl = new URL("/middle", request.url)
      homeUrl.searchParams.set("error", "unauthorized")
      
      return NextResponse.redirect(homeUrl)
    }

  }

  // Example 4: Add custom headers to API routes
  if (pathname.startsWith("/api/")) {
    const response = NextResponse.next()
    response.headers.set("X-API-Version", "1.0")
    response.headers.set("X-Custom-Header", "Added by middleware")
    response.headers.set("X-Request-Time", new Date().toISOString())
    return response
  }

  // Example 5: Redirect users already logged in away from login page
  if (pathname === "/login") {
    const token = request.cookies.get("auth-token")

    if (token) {
      // User is already logged in - redirect to dashboard
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }
  }

  // Default: Continue to the requested page
  return NextResponse.next()
}

/**
 * Middleware Configuration
 *
 * The matcher tells Next.js which routes to run middleware on
 * This is important for performance - don't run middleware on static files!
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico (favicon)
     * - public folder files
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.png$).*)",
  ],
}
