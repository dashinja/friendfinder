console.log(__dirname)
const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000

const apiRoutes = require('./app/routing/apiRoutes')
const htmlRoutes = require('./app/routing/htmlRoutes')

app.use(express.static(path.join(__dirname, '/app/public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

apiRoutes(app)
htmlRoutes(app)

app.listen(PORT, err => {
  if (err) throw err
  console.log(`Listening on port ${PORT}...`)
})