import express, { static as staticCustom, urlencoded, json, Express, Request } from 'express'
import { join } from 'path'
const app: Express = express()
const PORT = process.env.PORT || 3000

import apiRoutes from './app/routing/apiRoutes'
import htmlRoutes from './app/routing/htmlRoutes'

app.use(staticCustom(join(__dirname, '/app/public')))
app.use(urlencoded({ extended: true }))
app.use(json())

apiRoutes(app)
htmlRoutes(app)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})