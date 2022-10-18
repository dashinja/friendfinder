import profiles from '../data/friends'
import TransformData, { Profile } from '../../utility/methods/profileDataTransform'
import { Express } from 'express'

const getProfileImages = TransformData(profiles)

setInterval(() => {
  getProfileImages()
}, 5200 * 1000)

export default function (app: Express) {
  app.get('/api/friends', async (_req, res) => {
    res.json(profiles)
  })
  app.post('/api/friends', async (req, res) => {

    await getProfileImages()

    profiles as Record<string, any>

    if (req.body) {
      profiles.push(req.body)
      let sumCollection: number[] = []
      let sum: number
      for (let obj of profiles) {
        sum = 0
        obj.scores.forEach((num: number) => {
          sum += num
        })
        sumCollection.push(sum)
      }

      // add .scoreTotal prop to elements in profiles array
      profiles.forEach((profile: Profile, i: number) => {
        profile.scoreTotal = sumCollection[i]
      })

      for (let i = 0; i < profiles.length; i++) {
        profiles[i].scoreTotal = sumCollection[i]
      }

      //final matcher attempt....

      let delta = 5
      let matchSuccess: boolean
      let matched = function () {
        for (let i = 0; i < profiles.length; i++) {
          let newUserTotalScore = profiles[profiles.length - 1].scoreTotal
          let existingUserTotalScore = profiles[i].scoreTotal
          if (newUserTotalScore && existingUserTotalScore) {
            let compare = Math.abs(newUserTotalScore - existingUserTotalScore)
            if (
              compare <= delta &&
              profiles[i].name !== profiles[profiles.length - 1].name
            ) {
              let matchName = profiles[i].name
              let matchPhoto = profiles[i].photo

              let matchPerson = {
                name: matchName,
                photo: matchPhoto,
              }
              return matchPerson
            } else if (true) {
              matchSuccess = false
              continue
            }
          }
        }
        return matchSuccess
      }

      let myResponseObject = {
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
