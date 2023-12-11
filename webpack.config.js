const path = require('path');

module.exports = {
  entry: './src/js/index.js', // Percorso del file di ingresso del tuo progetto
  output: {
    filename: 'bundle.js', // Nome del file di output
    path: path.resolve(__dirname, 'dist'), // Percorso della cartella di output
  },
  mode: 'development',
  module: {
    rules: [      
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
