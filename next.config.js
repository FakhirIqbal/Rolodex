/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    // domains: ['majesticowls.com'],
  },

  reactStrictMode: true,
};

module.exports = nextConfig;
