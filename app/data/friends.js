const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: process.env.SQL_USER,
  password: process.env.SQL_PW,
  database: 'friends_db'
})
