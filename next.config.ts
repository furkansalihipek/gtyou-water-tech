/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/gtyou-water-tech' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/gtyou-water-tech/' : '',
};

export default nextConfig;
