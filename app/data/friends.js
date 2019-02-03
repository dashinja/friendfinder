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
    name: 'shinja',
    photo: 'https://via.placeholder.com/200x200',
    scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
  },
  {
    name: 'Zach',
    photo: 'https://some.photo.com/me.jpg',
    scores: [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]
  },
  {
    name: 'Keisha',
    photo: 'https://via.placeholder.com/200x200',
    scores: [5, 4, 3, 2, 1, 2, 3, 4, 5, 6]
  },
  {
    name: 'Halbanasta',
    photo: 'https://via.placeholder.com/200x200',
    scores: [2, 1, 3, 4, 5, 5, 2, 1, 4, 1]
  }
];

module.exports = profileData;
