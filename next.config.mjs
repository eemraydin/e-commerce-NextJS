/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**", // This allows any path under "images.pexels.com"
      },
    ],
  },
};

export default nextConfig;
