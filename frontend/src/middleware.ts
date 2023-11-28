import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: [
    '/',
    '/category/:path*',
    '/product/:path*',
    '/delivery-policy',
    '/privacy-policy',
    '/return-policy',
    'terms',
  ],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
