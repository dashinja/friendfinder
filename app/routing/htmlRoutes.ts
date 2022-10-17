import path from 'path'
import {Express} from 'express'

export default function(app: Express) {
  // A GET Route to `/survey` which should display the survey page.☑
  app.get('/survey', (_req, res) => {
    res.sendFile(path.join(__dirname, '../public/survey.html'))
  })

  // A default, catch-all route that leads to `home.html` which displays the home page.☑
  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'))
  })
}
