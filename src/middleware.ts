import { authMiddleware } from '@clerk/nextjs';

// Configure the middleware
export default authMiddleware({
  // Explicitly set 'Account.js' page as a protected route
  publicRoutes: [], // You can list other public routes here if needed
});

// Config object to specify where middleware should be applied
export const config = {
  matcher: ['/auth/account'], // Apply middleware only to this specific path
};
