// configs/config.js
require('dotenv').config();
module.exports = {
  "development": {
    "username": process.env.DEV_DATABASE_USERNAME,
    "password": process.env.DEV_DATABASE_PASSWORD,
    "database": process.env.DEV_DATABASE,
    "host": process.env.DEV_DATABASE_HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.PROD_DATABASE_USERNAME,
    "password": process.env.PROD_DATABASE_PASSWORD,
    "database": process.env.PROD_DATABASE,
    "host": process.env.PROD_DATABASE_HOST,
    "dialect": "mysql"
  },
};
