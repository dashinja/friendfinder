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
    console.log("I'm received from survey.html", req.body)

    if (req.body) {
      profiles.push(req.body)
      // let diff;
      // let submitObj = req.body;
      // for (let i = 0; i < profiles.length; i++) {
      //   diff = profiles[i].scores[i] - profiles[i + 1].scores[i];
      // }
      // console.log("I'm operated diff:", diff);
      let delta = 5
      let sumCollection = []
      let sum
      for (let obj of profiles) {
        sum = 0
        obj.scores.forEach(num => {
          sum += parseInt(num)
        })
        sumCollection.push(sum)
      }
      // console.log("I'm sumCollection right after pushing", sumCollection)

      // add .scoreTotal prop to elements in profiles array
      for (let i = 0; i < profiles.length; i++) {
        profiles[i].scoreTotal = sumCollection[i]
      }

      let matcherTest = Math.abs(
        parseInt(objB.scoreTotal) -
          parseInt(sumCollection[sumCollection.length - 1])
      )

      function matchup() {
        return matcherTest < delta
      }
      let yourMatchMaker = profiles.findIndex(matchUp())
      console.log("I'm beloved matchmaker: ", yourMatchMaker)
      let yourMatch = profiles[matchUp(profiles)]
      console.log("I'm your match: ", yourMatch)

      // console.log("I'm sumCollection right after .scoreTotal", sumCollection)

      // let matcher = profiles[profiles.length - 1].scoreTotal < delta
      // let matcherTest = (obj.scoreTotal - sumCollection[sumCollection.length-1].scoreTotal < delta)

      // function matchUp(arr) {
      //   let count = 0
      //   for (let objB of arr) {
      //     let matcherTest = Math.abs(
      //       parseInt(objB.scoreTotal) -
      //         parseInt(sumCollection[sumCollection.length - 1])
      //     )
      //     // if delta too large, check again
      //     if (matcherTest > delta) {
      //       count += 1
      //       continue
      //     } else if (matcherTest < delta) {
      //       let indexOfMatch = arr.findIndex((go, count) => {
      //         return arr[thisArg]
      //       })
      //       console.log("I'm indexOfMatch: ", indexOfMatch)
      //       return indexOfMatch
      //     } else {
      //       console.log('No matches found')
      //       return 'No Matches Found!'
      //     }
      //   }
      // }

      // for (let obj of profiles) {
      //   obj
      // }
      // obj.scoreTotal
      // sumCollection.forEach(num => {
      //   obj.scoreTotal = num
      // })
      // console.log("I'm profiles anew:", profiles)

      // req.body.scores.forEach(elem => {
      //   sum += parseInt(elem)
      // })
      // console.log("I'm sum", sum)
      // req.body.scoreSum = sum

      // console.log("I'm score on req.body", req.body.scoreSum)
      // function diff(arr) {
      //   let filtered = arr.filter(stuff => {
      //     console.log(profiles[stuff].name)
      //     Math.abs(25 - profiles[stuff].scoreSum) < 10
      //   })
      //   return filtered
      // }
      // let matcher = profiles.some(diff(profiles))
      // console.log("I'm matcher, did I win?", matcher)
      if (yourMatch === undefined) {
        yourMatch = 'Sorry, no match found for you!'
        return yourMatch
      }
      let myResponseObject = {
        errorCheck: true,
        myData: profiles,
        match: yourMatch
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
