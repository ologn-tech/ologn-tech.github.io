/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: '/ologn-tech.github.io',
    assetPrefix: '/ologn-tech.github.io/',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
};

module.exports = nextConfig;
