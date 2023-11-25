/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fastly.picsum.photos"], // Add your image domains here
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
