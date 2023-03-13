/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    domains: [
      "res.cloudinary.com",
      "dummyimage.com",
      "encrypted-tbn0.gstatic.com",
      "encrypted-tbn1.gstatic.com",
      "encrypted-tbn2.gstatic.com",
      "encrypted-tbn3.gstatic.com",
      "encrypted-tbn4.gstatic.com",
      "encrypted-tbn5.gstatic.com",
    ],
  },
};

module.exports = nextConfig;
