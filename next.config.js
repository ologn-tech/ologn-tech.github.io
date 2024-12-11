/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: '',
    assetPrefix: '/',
    trailingSlash: true,
    images: {
        unoptimized: true,
        loader: 'imgix',
        path: '/',
    },
};

module.exports = nextConfig;
