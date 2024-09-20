// /** @type {import('next').NextConfig} */


const nextConfig = {
    eslint:{
      ignoreDuringBuilds: true,
    },
    images: {
      domains: ['cdn.pixabay.com','plus.unsplash.com','res.cloudinary.com','img.freepik.com'],  // Add this line to allow external images
    },
  };

export default nextConfig;