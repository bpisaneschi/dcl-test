// craco.config.js
module.exports = {
    webpack: {
      configure: (webpackConfig, { env, paths }) => {
        webpackConfig.module.rules.push({
          test: /\.mdx?$/,
          use: [
            {
              loader: require.resolve('babel-loader'),
              options: {
                presets: [require.resolve('babel-preset-react-app')]
              }
            },
            {
              loader: require.resolve('@mdx-js/loader')
            }
          ]
        });
        return webpackConfig;
      }
    }
  };