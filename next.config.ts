/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  disable: process.env.NODE_ENV === 'development',
  skipWaiting: true,

})

const nextConfig = {
  reactStrictMode: true,
  experimental: { 
    appDir: false,
  },
}

module.exports = withPWA(nextConfig)
