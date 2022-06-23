/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
    domains: ['images.unsplash.com', 'localhost'],
  },
};

module.exports = nextConfig;
