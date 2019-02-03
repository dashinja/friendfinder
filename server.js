const express = require('express')
const path = require('path')
const mysql = require('mysql')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./app/routing/apiRoutes')(app)
require('./app/routing/htmlRoutes')(app)

app.listen(PORT, err => {
  if (err) throw err
  console.log(`Listening on port ${PORT}...`)
})

// const connection = mysql.createConnection({
//   host: 'localhost',
//   port: 3306,
//   user: process.env.SQL_USER,
//   password: process.env.SQL_PW,
//   database: 'friends_db'
// })
