/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  experimental: {
    esmExternals: false,
  }, webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false, os: false };

    return config;
  }
}