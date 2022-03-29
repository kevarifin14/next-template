const withTM = require("next-transpile-modules")(["@next-template/shared"], {
  debug: true,
});

module.exports = withTM({
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      os: false,
    };
    // Fixes @solana/spl-token issue: Module not found: Can't resolve './instructions/index.mjs'
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });
    return config;
  },
});
