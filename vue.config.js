// Import File System module to interact with the file system
const fs = require('fs');

// Import defineConfig function from Vue CLI service module
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Green Path'
    }
  },
  devServer: {
    https: {
      // Self-signed certificate for demo purposes
      // Replace with a certificate from a trusted CA for production use
      key: fs.readFileSync('./ssl/key-unencrypted.pem'),
      cert: fs.readFileSync('./ssl/cert.pem'),
    },
  }
});
