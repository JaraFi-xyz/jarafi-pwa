import type { NextConfig } from "next";

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',

});

const nextConfig: NextConfig = withPWA({
  /* config options here */
  dest: "public",
  register: true,
  skipWaiting: true,
});

export default nextConfig;
