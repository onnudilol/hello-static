module.exports = {
  launch: {
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
  },
  server: {
    command: 'node index.js',
    port: 3000,
  },
}