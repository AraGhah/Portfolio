import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  // Keep development files separate so production builds cannot break the preview.
  distDir: process.env.PORTFOLIO_BUILD_DIR || (process.env.NODE_ENV === 'development' ? '.next-dev' : '.next'),
  images: {
    unoptimized: true,
  },
  outputFileTracingRoot: path.join(__dirname),
  devIndicators: false,
};

export default withNextIntl(nextConfig);

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
