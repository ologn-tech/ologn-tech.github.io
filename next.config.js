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
    webpack(config) {
        config.output.publicPath = '/ologn-tech.github.io/';
        return config;
    }
};

module.exports = nextConfig;
