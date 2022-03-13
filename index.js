const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./models/Manager')
const Engineer = require('./models/Engineer')
const Intern = require('./models/Intern')
const teamData = []
const generateFile = require('./lib/template.js')
// Manager Questions


const promptManagerQuestions = () => {

    inquirer.prompt ([
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
            message: `What is the office number?`
        }
    ])
    .then(mgr=>{
        let manager = new Manager(mgr.ManagerName, mgr.ManagerId, mgr.ManagerEmail, mgr.ManagerNumber)
        teamData.push(manager)
        addMore()
    })
}

// Intern Questions
const promptInternQuestions = () => {

    inquirer.prompt ([
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
            name: `school`,
            message: `What school does/did this intern attend?`
        }
    ])
    .then(int=>{
        let intern = new Intern(int.ManagerName, int.ManagerId, int.ManagerEmail, int.school)
        teamData.push(intern)
        addMore()
    })
}

// Engineer Questions
const promptEngineerQuestions = () => {

    inquirer.prompt ([
        {
            type: `input`,
            name: `ManagerName`,
            message: `What is the engineer's name?`
        },
        {
            type: `input`,
            name: `ManagerId`,
            message: `What is the engineer's employee ID?`
        },
        {
            type: `input`,
            name: `ManagerEmail`,
            message: `What is the engineer's email address?`
        },
        {
            type: `input`,
            name: `github`,
            message: `What is the engineer's github user name?`
        }
    ])
    .then(eng=>{
        let engineer = new Engineer(eng.ManagerName, eng.ManagerId, eng.ManagerEmail, eng.github)
        teamData.push(engineer)
        addMore()
    })
}

const addMore = () => {
    inquirer.prompt({
        type: `list`,
        name: `continue`,
        message: `Would you like to add another employee?`,
        choices: ['Yes', 'No']
    }).then(ans => {
        if (ans.continue == 'Yes'){
            inquirer.prompt({
                type: `list`,
                name: `type`,
                message: `What type of employee would you like to add?`,
                choices: ['Intern', 'Engineer']
            }).then(emp => {
                if (emp.type == 'Intern'){
                    promptInternQuestions()
                } else {
                    promptEngineerQuestions()
                }
            })
        } else{
            
            fs.writeFileSync('./dist/team.html', generateFile(teamData), "utf-8")
            console.log(`Generating your team.html now`)
            console.log(generateFile(teamData))
            // process.exit()
        } 
    })
}
promptManagerQuestions()