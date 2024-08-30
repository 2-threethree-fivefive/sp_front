/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['succ.ssgcdn.com', 'simg.ssgcdn.com', 'sitem.ssgcdn.com'],
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
