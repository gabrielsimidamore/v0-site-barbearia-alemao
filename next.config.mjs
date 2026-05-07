/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // Otimização de imagens ativada (WebP/AVIF automático, lazy-load, cache)
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 dias de cache
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Compressão gzip/brotli de todos os assets
  compress: true,
  // Remove source maps em produção (bundle menor)
  productionBrowserSourceMaps: false,
  // Cabeçalhos de cache para assets estáticos
  async headers() {
    return [
      {
        source: "/cortes/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/(logo|apple-icon|icon.*)\\.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ]
  },
}

export default nextConfig
