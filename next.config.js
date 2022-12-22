module.exports = {
  images: {
    domains: ["instagram.fcgh39-1.fna.fbcdn.net"],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
