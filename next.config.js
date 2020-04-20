require('dotenv').config()
const withImages = require('next-images')


module.exports = withImages({
  webpack(config, options) {
    env: {
           SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
         }
    return config
  }
})


// require('dotenv').config()

// module.exports = {
//   env: {
//     SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
//   }
// }