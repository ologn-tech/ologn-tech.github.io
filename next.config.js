/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: '',
    assetPrefix: 'https://github.com/ologn-tech/ologn-tech.github.io/',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
};

module.exports = nextConfig;
