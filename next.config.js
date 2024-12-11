/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: '',
    assetPrefix: '/ologn-tech.github.io/',
    trailingSlash: true,
    images: {
        unoptimized: true,
    }
};

module.exports = nextConfig;
