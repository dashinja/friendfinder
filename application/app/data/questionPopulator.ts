// import inquirer from 'inquirer'
import inquirer from 'inquirer'

let questionHolder: string[] = []
let counter = 1

export default function makeQuestions() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'Question 1:',
        name: 'q1',
      },
      {
        type: 'input',
        message: 'Question 2:',
        name: 'q2',
      },
      {
        type: 'input',
        message: 'Question 3:',
        name: 'q3',
      },
      {
        type: 'input',
        message: 'Question 4:',
        name: 'q4',
      },
      {
        type: 'input',
        message: 'Question 5:',
        name: 'q5',
      },
      {
        type: 'input',
        message: 'Question 6:',
        name: 'q6',
      },
      {
        type: 'input',
        message: 'Question 7:',
        name: 'q7',
      },
      {
        type: 'input',
        message: 'Question 8:',
        name: 'q8',
      },
      {
        type: 'input',
        message: 'Question 9:',
        name: 'q9',
      },
      {
        type: 'input',
        message: 'Question 10:',
        name: 'q10',
      },
    ])
    .then((qPop: Record<string, string>) => {
      for (const question in qPop) {
        questionHolder.push(qPop[question])
        counter += 1
      }

      return questionHolder
    })

    .catch((err: any) => {
      if (err) throw err
    })
}

makeQuestions()