
const withImages = require('next-images')
require('dotenv').config()

module.exports = withImages({
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
  },
  webpack(config, options) {
    return config
  }
})



