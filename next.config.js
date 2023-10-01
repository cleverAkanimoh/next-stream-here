/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DB_URI: "mongodb://localhost:27017/streamfreak",
        NEXTAUTH_SECRET: "STREAMFREAK"
    }
};

module.exports = nextConfig;