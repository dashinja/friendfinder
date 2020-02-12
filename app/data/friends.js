require('dotenv').config()
const axios = require('axios').default

;(async () => {
  let profileData = [
    {
      name: 'Queen Jacobs',
      photo: await getFace(),
      scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    },
    {
      name: 'Amoura Seni',
      photo: await getFace(),
      scores: [1, 1, 1, 1, 1, 2, 2, 2, 1, 2],
    },
    {
      name: 'Keisha O-halma',
      photo: await getFace(),
      scores: [2, 2, 2, 2, 2, 2, 2, 2, 1, 2],
    },
    {
      name: 'Halbanasta Nadash',
      photo: await getFace(),
      scores: [2, 2, 2, 2, 2, 3, 3, 3, 3, 2],
    },
    {
      name: 'Thuy Nguyen',
      photo: await getFace(),
      scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 4],
    },
    {
      name: 'Chase Mina',
      photo: await getFace(),
      scores: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    },
    {
      name: 'Gabby Mean',
      photo: await getFace(),
      scores: [4, 4, 4, 4, 4, 4, 5, 5, 5, 5],
    },
    {
      name: 'Shayla Kofti',
      photo: await getFace(),
      scores: [1, 2, 3, 4, 5, 4, 5, 5, 5, 5],
    },
    {
      name: 'Isaclaire Wingin',
      photo: await getFace(),
      scores: [1, 2, 3, 2, 5, 4, 3, 2, 1, 1],
    },
    {
      name: 'Patrice Journeu',
      photo: await getFace(),
      scores: [1, 2, 3, 4, 5, 4, 2, 3, 5, 5],
    },
  ]

  // const yep = await showMe(profileData)
  // console.log('did I change?:' + yep)
  console.log(profileData)

  module.exports = profileData

  async function getFace(profile) {
    let out
    try {
      await axios
        .get(
          'https://api.generated.photos/api/v1/faces?per_page=1&emotion=joy&gender=female&age=adult&order_by=random',
          {
            headers: {
              Authorization: `API-Key ${process.env.PHOTO_GENERATOR_KEY}`,
            },
          },
        )
        .then(async res => {
          // console.log(res.data.faces[0].urls[4]['512'])
          let face = res.data.faces[0].urls[4]['512']

          out = face
          // return res
          return face
          // const axiosResult = await axiosResponse
          // console.log(axiosResult)
        })
        .catch(err => console.log(err))
    } catch (error) {
      console.log(error)
    }

    return await out
  }

  async function showMe(profile) {
    // for (let item in profileData) {
    //   item.photo = await getFace()
    //   console.log("I'm here")
    //   console.log('new:' + item.photo)
    // }
    for (let i = 0; i < profile.length; i++) {
      // console.log('in the monkey')
      // console.log(profile[i])
      profile[i].photo = await getFace()
      // console.log(profile[i])
    }

    return profile
    // const test = await getFace()
    // console.log(`I'm the face: ${test}`)
  }
  // console.log('yep:' + yep)
})()
