"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import inquirer from 'inquirer'
var inquirer_1 = __importDefault(require("inquirer"));
var questionHolder = [];
function makeQuestions() {
    inquirer_1.default
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
        .then(function (qPop) {
        for (var question in qPop) {
            questionHolder.push(qPop[question]);
        }
        return questionHolder;
    })
        .catch(function (err) {
        if (err)
            throw err;
    });
}
exports.default = makeQuestions;
makeQuestions();
