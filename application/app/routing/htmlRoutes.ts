import path from 'path'
import {Express} from 'express'
import { fileURLToPath } from 'url'

export default function(app: Express) {
  const __fileName = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__fileName)

  // A GET Route to `/survey` which should display the survey page.☑
  app.get('/survey', (_req, res) => {
    res.sendFile(path.join(__dirname, '../public/survey.html'))
  })

  // A default, catch-all route that leads to `home.html` which displays the home page.☑
  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'))
  })
}
