/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'out',
  reactStrictMode: true,
  images: {
    domains: ['cdn-icons-png.flaticon.com'],
  },
}

module.exports = nextConfig
