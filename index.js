const fs = require('fs');
const inquirer = require('inquirer');

const promptManagerQuestions = () => {
    return inquirer.prompt ([
        {
            type: `input`,
            name: `ManagerName`,
            message: `What is the team manager's name?`
        },
        {
            type: `input`,
            name: `ManagerId`,
            message: `What is the manager's employee ID?`
        },
        {
            type: `input`,
            name: `ManagerEmail`,
            message: `What is the manager's email address?`
        },
        {
            type: `input`,
            name: `ManagerNumber`,
            message: `What is the manager's phone number?`
        }
    
    ]).then(answers) => {}

const promptEmployeeOption = () => {
    return inquirer.prompt ([
        {
            type: `list`,
            name: `EmployeeOption`,
            message: `Choose an employee to add to your team`,
            choices: [`Engineer`, `Intern`],

        }
    ]).then(answers) => 
};