import express, { static as staticCustom, urlencoded, json, Express } from 'express'
import path, { join } from 'path'
import { fileURLToPath } from 'url'
const app: Express = express()
const PORT = process.env.PORT || 3000

import apiRoutes from './app/routing/apiRoutes.js'
import htmlRoutes from './app/routing/htmlRoutes.js'

const __fileName = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__fileName)

app.use(staticCustom(join(__dirname, '/app/public')))
app.use(urlencoded({ extended: true }))
app.use(json())

apiRoutes(app)
htmlRoutes(app)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})