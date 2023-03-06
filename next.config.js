require("dotenv").config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GQL_ENDPOINT: process.env.GQL_ENDPOINT,
  },
};

module.exports = nextConfig;
