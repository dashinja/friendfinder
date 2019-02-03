let profiles = require('../data/friends');
// let questions = require('../data/questionPopulator')

module.exports = function(app) {
  app.get('/api/friends', (req, res) => {
    // display JSON of all possible *friends*

    res.json(profiles);
  });
  // app.get('/data/friends', (req, res) => {
  //   res.json(profiles)
  // })
  app.post('/api/friends', (req, res) => {
    // handle incoming servery results
    // also, compatability logic
    console.log("I'm received from survey.html", req.body);

    let totalDifference;

    // find diff between each element of array across arrays per question

    let myResponseObject = {
      errorCheck: true,
      myData: profiles
    };
    res.json(myResponseObject);

    if (req.body) {
      profiles.push(req.body);
      let diff;
      let submitObj = req.body;
      for (let i = 0; i < profiles.length; i++) {
        diff = profiles[i].scores[i] - profiles[i + 1].scores[i];
      }
      console.log("I'm operated diff:", diff);
      //   let sum = 0;
      //   req.body.scores.forEach(elem => {
      //     sum += parseInt(elem);
      //   });
      //   // console.log("I'm sum", sum)
      //   req.body.scoreSum = sum;
      //   console.log("I'm score on req.body", req.body.scoreSum);
      // function diff(arr) {
      //   let filtered = arr.filter(stuff => {
      //     console.log(profiles[stuff].name)
      //     Math.abs(25 - profiles[stuff].scoreSum) < 10
      //   })
      //   return filtered
      // }
      // let matcher = profiles.some(diff(profiles))
      // console.log("I'm matcher, did I win?", matcher)
    } else {
      res.json(false);
    }

    // res.redirect('/')
  });

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
};
