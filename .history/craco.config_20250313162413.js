// craco.config.js
module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        // Find the oneOf rule (CRA uses oneOf to handle asset files)
        const oneOfRule = webpackConfig.module.rules.find((rule) => Array.isArray(rule.oneOf));
  
        if (oneOfRule) {
          // Loop through each rule inside oneOf and add an exclude for .mdx files
          oneOfRule.oneOf.forEach((rule) => {
            if (rule.test && rule.test.toString().includes('png|')) {
              // Typically, image and asset rules have a regex that can be used to exclude MDX files
              rule.exclude = rule.exclude ? [...rule.exclude, /\.mdx?$/] : [/\.mdx?$/];
            }
          });
        }
  
        // Now add our MDX rule so that .mdx files are processed by babel-loader and @mdx-js/loader
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