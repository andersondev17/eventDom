import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from "next/server";

const publicRoutes = [
  '/',
  '/events/:id',
  '/api/webhook/clerk',
  '/api/webhook/stripe',
  '/api/uploadthing',
  '/sign-in',
];

const ignoredRoutes = [
  '/api/webhook/clerk',
  '/api/webhook/stripe',
  '/api/uploadthing'
];

export default clerkMiddleware((auth, req) => {
  const isPublicRoute = publicRoutes.some(route => 
    req.nextUrl.pathname.startsWith(route) || req.nextUrl.pathname === route
  );
  const isIgnoredRoute = ignoredRoutes.some(route => 
    req.nextUrl.pathname.startsWith(route) || req.nextUrl.pathname === route
  );

  if (isPublicRoute || isIgnoredRoute) {
    return NextResponse.next();
  }

  // For protected routes, if the user is not signed in, redirect to sign-in
  if (!auth.userId) {
    const signInUrl = new URL('/sign-in', req.url);
    signInUrl.searchParams.set('redirect_url', req.url);
    return NextResponse.redirect(signInUrl);
  }

  // User is authenticated, allow the request to proceed
  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};