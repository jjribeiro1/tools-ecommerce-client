import { authMiddleware } from "@clerk/nextjs";
 
//TODO: FIX public and private routes later
export default authMiddleware({
  publicRoutes: ['/'],
});
 
export const config = {
  matcher: ['/category/:path*', '/'],
};
 