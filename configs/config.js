// configs/config.js
require('dotenv').config();
module.exports = {
  "development": {
    "username": process.env.DEV_DATABASE_USERNAME,
    "password": process.env.DEV_DATABASE_PASSWORD,
    "database": process.env.DEV_DATABASE,
    "host": process.env.DEV_DATABASE_HOST,
    "dialect": "mysql",
    "pool":{
        max: 5,
        min: 0,
        idle: 20000,
        acquire: 20000
    }
  },
  "production": {
    "username": process.env.PROD_DATABASE_USERNAME,
    "password": process.env.PROD_DATABASE_PASSWORD,
    "database": process.env.PROD_DATABASE,
    "host": process.env.PROD_DATABASE_HOST,
    "dialect": "mysql",
    "pool":{
          max: 5,
          min: 0,
          idle: 20000,
          acquire: 20000
      }
  }
};
