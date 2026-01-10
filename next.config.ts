import type { NextConfig } from "next";

// ビルドエラー回避のため、一時的にPWA設定を無効化します
/*
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
});
*/

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
