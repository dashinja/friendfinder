let profiles = require('../data/friends')

module.exports = function(app) {
  app.get('/api/friends', (req, res) => {
    // display JSON of all possible *friends*
    console.log("I'm the profileData array from ../data/friends:", req.body)
  })
  app.post('/api/friends', (req, res) => {
    // handle incoming servery results
    // also, compatability logic
  })
}
