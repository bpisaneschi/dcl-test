// craco.config.js
module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        // Add MDX rule at the beginning of the rules array
        webpackConfig.module.rules.unshift({
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
  
        // Exclude MDX files from the default asset loader rules
        const oneOfRule = webpackConfig.module.rules.find((rule) => Array.isArray(rule.oneOf));
        if (oneOfRule) {
          oneOfRule.oneOf.forEach((rule) => {
            if (rule.test && rule.test.toString().includes('svg|')) {
              // If the rule already has an exclude array, add .mdx extension; otherwise create one
              rule.exclude = rule.exclude ? [...rule.exclude, /\.mdx?$/] : [/\.mdx?$/];
            }
          });
        }
  
        return webpackConfig;
      }
    }
  };