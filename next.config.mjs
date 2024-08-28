/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['simg.ssgcdn.com'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

export default nextConfig
