var data = require('../../app/data/friends')
const axios = require('axios').default
require('dotenv').config()

const addFaces = async () => {
  try {
    const response = await axios.get(
      `https://api.generated.photos/api/v1/faces?per_page=${data.length}&gender=female`,
      {
        headers: {
          Authorization: `API-KEY ${process.env.PHOTO_GENERATOR_KEY}`,
        },
      },
    )

    let faceList = response.data.faces
    // console.log(faceList)
    let faceUrls

    for (let face of faceList) {
      // console.log(face.urls[4])
      for (let user of data) {
        user.photo = face.urls[4]
      }
    }
    console.log('new data:', data)
  } catch (error) {
    console.error(error)
  }
}

addFaces()

module.exports = data
