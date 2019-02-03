let profiles = require('../data/friends')
let questions = require('../data/questionPopulator')
module.exports = function(app) {
  app.get('/api/friends', (req, res) => {
    // display JSON of all possible *friends*
    console.log("I'm the profileData array from ../data/friends:", req.body)
  })
  app.post('/api/friends', (req, res) => {
    // handle incoming servery results
    // also, compatability logic
  })
  app.get('/api/questions', (req, res) => {
    console.log(req.body)
    console.log("I'm res.body:", res.body)
    res.json(questions)
  })
}
