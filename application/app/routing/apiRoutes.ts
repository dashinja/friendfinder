import profiles from '../data/friends.js'
import TransformData, { Profile } from '../../utility/methods/profileDataTransform.js'
import { Express } from 'express'

const getProfileImages = TransformData(profiles)

// setInterval(() => {
//   getProfileImages()
// }, 5200 * 1000)

export default function (app: Express) {
  app.get('/api/friends', async (_req, res) => {
    res.json(profiles)
  })
  app.post('/api/friends', async (req, res) => {

    await getProfileImages()

    const body = req.body as Profile

    if (body) {
      body.scores = body.scores.map(score => typeof score === 'string' ? parseInt(score) : score)

      profiles.push(body)

      for (const profile of profiles) {
        const adder = (numArray: number[]) => numArray.reduce((accum, next) => accum + next, 0)

        profile.scoreTotal = adder(profile.scores)
      }

      //final matcher attempt....

      const delta = 5
      let matchSuccess: boolean
      console.log('for trenton')
      const matched = function () {
        for (let i = 0; i < profiles.length; i++) {
          const newUserTotalScore = profiles[profiles.length - 1].scoreTotal
          const existingUserTotalScore = profiles[i].scoreTotal
          if (newUserTotalScore && existingUserTotalScore) {
            const compare = Math.abs(newUserTotalScore - existingUserTotalScore)
            if (
              compare <= delta &&
              profiles[i].name !== profiles[profiles.length - 1].name
            ) {
              const matchName = profiles[i].name
              const matchPhoto = profiles[i].photo

              const matchPerson = {
                name: matchName,
                photo: matchPhoto,
              }
              return matchPerson
            } else {
              matchSuccess = false
              continue
            }
          }
        }
        return matchSuccess
      }

      const myResponseObject = {
        errorCheck: true,
        myData: profiles,
        matchSuccess: true,
        match: matched(),
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
