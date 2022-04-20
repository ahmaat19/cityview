/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.immediate.co.uk',
      'drive.google.com',
      'upload.wikimedia.org',
      'cityview.s3.us-west-004.backblazeb2.com',
    ],
  },
}

module.exports = nextConfig
