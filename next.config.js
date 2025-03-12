/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placehold.co', 'via.placeholder.com', 'picsum.photos'],
    unoptimized: true,
    path: '/mishji-digital/_next/image'
  },
  output: 'export',
  basePath: '/mishji-digital',
  assetPrefix: '/mishji-digital/',
}

module.exports = nextConfig 