import { defineCloudflareConfig } from '@opennextjs/cloudflare';
import staticAssetsIncrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache';

/**
 * Every page on this site is pre-rendered at build time (no ISR / revalidation), so the
 * pre-rendered HTML and RSC payloads are served straight from Workers Static Assets.
 * Cache interception answers those requests without starting the Next.js server, which
 * keeps per-request CPU far below the Workers Free plan limit (10 ms).
 * See https://opennext.js.org/cloudflare/caching ("SSG site").
 */
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
});
