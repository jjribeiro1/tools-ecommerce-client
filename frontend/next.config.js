/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [process.env.STRAPI_DOMAIN, "cdn.sanity.io"],
    }
}

module.exports = nextConfig
