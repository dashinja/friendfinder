let profiles = require('../data/friends')

module.exports = function(app) {
  app.get('/api/friends', (req, res) => {
    res.json(profiles)
  })
  app.post('/api/friends', (req, res) => {
    // console.log("I'm received from survey.html", req.body)

    if (req.body) {
      profiles.push(req.body)
      let sumCollection = []
      let sum
      for (let obj of profiles) {
        sum = 0
        obj.scores.forEach(num => {
          sum += parseInt(num)
        })
        sumCollection.push(sum)
      }

      // add .scoreTotal prop to elements in profiles array
      for (let i = 0; i < profiles.length; i++) {
        profiles[i].scoreTotal = sumCollection[i]
      }

      //final matcher attempt....

      let delta = 5
      let matchSuccess
      let matched = function() {
        for (let i = 0; i < profiles.length; i++) {
          let newUser = parseInt(profiles[profiles.length - 1].scoreTotal)
          let existingUser = parseInt(profiles[i].scoreTotal)
          let compare = Math.abs(newUser - existingUser)
          if (
            compare <= delta &&
            profiles[i].name !== profiles[profiles.length - 1].name
          ) {
            let matchName = profiles[i].name
            let matchPhoto = profiles[i].photo

            let matchPerson = {
              name: matchName,
              photo: matchPhoto
            }
            return matchPerson
          } else if (true) {
            matchSuccess = false
            continue
          }
        }
        return matchSuccess
      }

      // console.log("I'm matched: ", matched())

      let myResponseObject = {
        errorCheck: true,
        myData: profiles,
        matchSuccess: true,
        match: matched()
      }
      if (!matched()) {
        myResponseObject.matchSuccess = false
      }
      res.json(myResponseObject)
    } else {
      res.json(false)
    }
  })
}
