// const mysql = require('mysql')
// const connection = mysql.createConnection({
//   host: 'localhost',
//   port: 3306,
//   user: process.env.SQL_USER,
//   password: process.env.SQL_PW,
//   database: 'friends_db'
// })

// You should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.

let profileData = [
  {
    name: 'Queen Jacobs',
    photo: 'https://randomuser.me/api/portraits/women/9.jpg',
    scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
  },
  {
    name: 'Amoura Seni',
    photo: 'https://randomuser.me/api/portraits/women/62.jpg',
    scores: [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]
  },
  {
    name: 'Keisha O-halma',
    photo: 'https://randomuser.me/api/portraits/women/30.jpg',
    scores: [5, 4, 3, 2, 1, 2, 3, 4, 5, 6]
  },
  {
    name: 'Halbanasta Nadash',
    photo: 'https://randomuser.me/api/portraits/women/2.jpg',
    scores: [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]
  },
  {
    name: 'Thuy Nguyen',
    photo: 'https://randomuser.me/api/portraits/women/12.jpg',
    scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
  },
  {
    name: 'Halbanasta Nadash',
    photo: 'https://randomuser.me/api/portraits/women/52.jpg',
    scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  }
]

module.exports = profileData
