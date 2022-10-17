import axios from 'axios'
import * as dotenv from 'dotenv'
dotenv.config()

type Profile = {
  name: string
  photo: string
  scores: number[]
}

export default (data: Profile[]) => async () => {
  console.log('start the transform func')
  try {
    console.log('right before axios call)')
    const response = await axios.get(
      `https://api.generated.photos/api/v1/faces?per_page=${data.length}&gender=female&emotion=joy&age=adult&confidence=1&order_by=random`,
      {
        headers: {
          Authorization: `API-KEY ${process.env.PHOTO_GENERATOR_KEY}`,
        },
      },
    )
    console.log('right after axios call')
    const faceList = response.data.faces

    for (let i = 0; i < data.length; i++) {
      let facePhotoUrl = faceList[i].urls[2]['128']

      data[i].photo = facePhotoUrl
    }

    return data
  } catch (error) {
    console.error(error)
  }
}
