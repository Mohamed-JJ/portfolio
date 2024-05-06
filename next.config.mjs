/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.freepik.com",
        protocol: "https",
      },
      {
        hostname: "img.freepik.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
