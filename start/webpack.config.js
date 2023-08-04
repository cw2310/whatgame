module.exports = {
    // ...
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/', // Change the output path as needed
              },
            },
          ],
        },
        // Add other rules for handling different file types if necessary
      ],
    },
    // ...
  };
  