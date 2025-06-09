// const mysql = require('mysql2/promise'); // promise-based

// const pool = mysql.createPool({
//     host : process.env.HOST,
//     user : process.env.USER,
//     password : process.env.PASSWORD,
//     database : process.env.DATABASE,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// })


// module.exports = pool;

// backend/config/database.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: 'mysql',
    logging: false,
  }
);

module.exports = sequelize;
