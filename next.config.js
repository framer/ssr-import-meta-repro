module.exports = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.experiments = {
      buildHttp: true
    };

    // config.module.rules.push(
    //     {
    //       resource: /^https:\/\/framer(usercontent)?\.com\//,
    //       resolve: {
    //         fullySpecified: false
    //       }
    //     },
    // )

    return config
  },
  experimental: {
      esmExternals: "loose"
  },
}
