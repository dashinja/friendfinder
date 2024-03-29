import { Profile } from '../../utility/methods/profileDataTransform'

export type profileDataType = {
  name: string
  photo: string
  scores: number[]
  scoreTotal?: number
}

const profileData: profileDataType[] = [
  {
    name: 'Queen Jacobs',
    photo: 'https://randomuser.me/api/portraits/women/9.jpg',
    scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
  {
    name: 'Amoura Seni',
    photo: 'https://randomuser.me/api/portraits/women/62.jpg',
    scores: [1, 1, 1, 1, 1, 2, 2, 2, 1, 2],
  },
  {
    name: 'Keisha O-halma',
    photo: 'https://randomuser.me/api/portraits/women/30.jpg',
    scores: [2, 2, 2, 2, 2, 2, 2, 2, 1, 2],
  },
  {
    name: 'Halbanasta Nadash',
    photo: 'https://randomuser.me/api/portraits/women/2.jpg',
    scores: [2, 2, 2, 2, 2, 3, 3, 3, 3, 2],
  },
  {
    name: 'Thuy Nguyen',
    photo: 'https://randomuser.me/api/portraits/women/12.jpg',
    scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 4],
  },
  {
    name: 'Chase Mina',
    photo: 'https://randomuser.me/api/portraits/women/52.jpg',
    scores: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  },
  {
    name: 'Gabby Mean',
    photo: 'https://randomuser.me/api/portraits/women/83.jpg',
    scores: [4, 4, 4, 4, 4, 4, 5, 5, 5, 5],
  },
  {
    name: 'Shayla Kofti',
    photo: 'https://randomuser.me/api/portraits/women/53.jpg',
    scores: [1, 2, 3, 4, 5, 4, 5, 5, 5, 5],
  },
  {
    name: 'Isaclaire Wingin',
    photo: 'https://randomuser.me/api/portraits/women/77.jpg',
    scores: [1, 2, 3, 2, 5, 4, 3, 2, 1, 1],
  },
  {
    name: 'Patrice Journeu',
    photo: 'https://randomuser.me/api/portraits/women/92.jpg',
    scores: [1, 2, 3, 4, 5, 4, 2, 3, 5, 5],
  },
] as unknown as Profile[]

export default profileData