/* eslint-disable no-magic-numbers */
require('dotenv').config()

module.exports = {
  port: process.env.PORT || 3001,
  isProduction: process.env.NODE_ENV === 'production',
  apiVersion: process.env.API_VERSION || 1,
  mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/dbname',
}
