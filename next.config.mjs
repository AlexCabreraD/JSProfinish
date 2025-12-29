/** @type {import('next').NextConfig} */
const nextConfig = {
    // Image optimization
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60,
    },
    // Performance optimizations
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    // Optimize bundle size
    experimental: {
        optimizePackageImports: ['@mui/material', '@mui/icons-material', 'react-icons'],
    },
    async redirects() {
        return [
            {
                source: '/(.*)',
                has: [{ type: 'host', value: 'jsprofinish-utah.com' }],
                destination: 'https://jsprofinish-utah.com/:path*',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
