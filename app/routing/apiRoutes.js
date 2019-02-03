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
      let sum = 0
      req.body.scores.forEach(elem => {
        sum += parseInt(elem)
      })

      // console.log("I'm sum", sum)
      req.body.scoreSum = sum
      console.log("I'm score on req.body", req.body.scoreSum)
      profiles.push(req.body)
      // function diff(arr) {
      //   let filtered = arr.filter(stuff => {
      //     console.log(profiles[stuff].name)
      //     Math.abs(25 - profiles[stuff].scoreSum) < 10
      //   })
      //   return filtered
      // }
      // let matcher = profiles.some(diff(profiles))
      // console.log("I'm matcher, did I win?", matcher)

      let myResponseObject = {
        errorCheck: true,
        myData: profiles
      }
      res.json(myResponseObject)
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
