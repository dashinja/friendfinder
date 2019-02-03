let profiles = require('../data/friends')
// let questions = require('../data/questionPopulator')

module.exports = function(app) {
  app.get('/api/friends', (req, res) => {
    // display JSON of all possible *friends*

    res.json(profiles)
  })
  // app.get('/data/friends', (req, res) => {
  //   res.json(profiles)
  // })
  app.post('/api/friends', (req, res) => {
    // handle incoming servery results
    // also, compatability logic
    console.log("I'm recieved from survey.html", req.body)
    if (req.body) {
      profiles.push(req.body)
      res.json(true)
    } else {
      res.json(false)
    }

    // res.redirect('/')
  })

  // app.post('/data/friends', (req, res) => {
  //   // handle incoming servery results
  //   // also, compatability logic
  //   console.log("I'm data added to /data/friends", req.body)
  //   if (req.body) {
  //     profiles.push(req.body)
  //     res.json(true)
  //   } else {
  //     res.json(false)
  //   }
  // })
  // app.get('/api/questions', (req, res) => {
  //   console.log(req.body)
  //   console.log("I'm res.body:", res.body)
  //   res.json(questions)
  // })
}
