/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Maynards Registry',
    description: 'My list of Kasm Workspaces',
    icon: '/img/logo.svg',
    listUrl: 'https://pointyg64.github.io/maynard-registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
