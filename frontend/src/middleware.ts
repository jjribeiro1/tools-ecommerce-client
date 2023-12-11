import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: [
    '/',
    '/category/:path*',
    '/product/:path*',
    '/cart',
    '/delivery-policy',
    '/privacy-policy',
    '/return-policy',
    '/terms',
    "/api/webhooks/clerk/:path*",
    "/api/webhooks/stripe/:path*",
    "/sign-in",
    "/sign-up"
  ],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
