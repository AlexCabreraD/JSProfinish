/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/(.*)',
                has: [{ type: 'host', value: 'jsprofinish-utah.com' }],
                destination: 'https://jsprofinish-utah.com/:path*',
                permanent: true,  // This sets a 301 permanent redirect
            },
        ];
    },
};

export default nextConfig;
