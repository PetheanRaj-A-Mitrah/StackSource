const nextConfig = {
    images: {
        formats: ['image/webp'],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "worthy-cheese-16c170eb03.strapiapp.com",
                pathname: "/**",
            },
        ],
    },
    devIndicators: false
};

export default nextConfig;
