const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: true, images: { domains: ["neodb.social"] } };

module.exports = withContentlayer(nextConfig);
