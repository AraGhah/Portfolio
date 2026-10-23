import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// Keep Edge middleware while OpenNext's Node.js proxy support is experimental.
export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(fr|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
};
