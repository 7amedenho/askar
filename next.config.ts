import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // النطاق المستخدم لخدمة الصور
        pathname: '/**', // السماح بجميع المسارات على هذا النطاق
      },
    ],
  },
};

export default nextConfig;
