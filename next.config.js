/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placehold.co', 'via.placeholder.com', 'picsum.photos'],
    unoptimized: true,
  },
  output: 'export',
  basePath: '/mishji-digital',
  assetPrefix: '/mishji-digital',
}

module.exports = nextConfig 