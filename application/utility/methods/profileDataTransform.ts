import * as dotenv from 'dotenv'
dotenv.config()
import axios from 'axios'

export interface Profile {
  name: string
  photo: string
  scores: number[]
  scoreTotal?: number
}

export default (data: Profile[]) => async () => {
  try {
    const response = await axios.get(
      `https://api.generated.photos/api/v1/faces?per_page=${data.length}&gender=female&emotion=joy&age=adult&confidence=1&order_by=random`,
      {
        headers: {
          Authorization: `API-KEY ${process.env.PHOTO_GENERATOR_KEY}`,
        },
      },
    )

    if (response.status !== 200) {
      const faceList = response.data.faces

      data.forEach((p, i) => {
        const facePhotoUrl = faceList[i].urls[2]['128']
        p.photo = facePhotoUrl
      })
    } 

    return data
  } catch (error) {
    console.error('Photo Generator Failed')
  }
}
