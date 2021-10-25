const withTM = require("next-transpile-modules")([
  "@solana/wallet-adapter-wallets",
]);

module.exports = withTM({
  // https://github.com/project-serum/anchor/issues/244#issuecomment-918334381
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
});
