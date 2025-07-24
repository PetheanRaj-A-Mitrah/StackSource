const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "worthy-cheese-16c170eb03.strapiapp.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "worthy-cheese-16c170eb03.media.strapiapp.com",
                pathname: "/**",
            },
        ],
    },
    devIndicators: false,
};

export default nextConfig;
