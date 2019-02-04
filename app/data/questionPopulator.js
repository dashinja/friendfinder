/* This file is for use only when you want to easily remake the questions in the survey. This space works, however it is no longer connected to the survey.thml page. Some assembly required. */

const inquirer = require('inquirer')

let questionHolder = []
let counter = 1
let questionObject = function(id, name) {
  this.id = counter
  this.name = name
  this.o1 = 1
  this.o2 = 2
  this.o3 = 3
  this.o4 = 4
  this.o5 = 5
}

function makeQuestions() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'Question 1:',
        name: 'q1'
      },
      {
        type: 'input',
        message: 'Question 2:',
        name: 'q2'
      },
      {
        type: 'input',
        message: 'Question 3:',
        name: 'q3'
      },
      {
        type: 'input',
        message: 'Question 4:',
        name: 'q4'
      },
      {
        type: 'input',
        message: 'Question 5:',
        name: 'q5'
      },
      {
        type: 'input',
        message: 'Question 6:',
        name: 'q6'
      },
      {
        type: 'input',
        message: 'Question 7:',
        name: 'q7'
      },
      {
        type: 'input',
        message: 'Question 8:',
        name: 'q8'
      },
      {
        type: 'input',
        message: 'Question 9:',
        name: 'q9'
      },
      {
        type: 'input',
        message: 'Question 10:',
        name: 'q10'
      }
    ])
    .then(qPop => {
      console.log("I'm populated inquirer response object: ", qPop)
      for (const name in qPop) {
        questionHolder.push(new questionObject(counter, qPop[name]))
        counter += 1
      }
      console.table("I'm populated questionHolder:", questionHolder)

      return questionHolder
    })
    .then(data => {
      // console.log("I'm data questionHolder", data)
      module.exports = function(app) {
        app.post
        data
      }
    })
    .catch(err => {
      if (err) throw err
    })
}

// makeQuestions()
// module.exports = questionHolder
// console.log("I'm module.exports", module.exports)
