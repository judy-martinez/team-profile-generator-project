const fs = require('fs');
const inquirer = require('inquirer');


inquirer.prompt ([
    {
        type: `input`,
        name: `ManagerName`,
        message: `What is your manager's name?`
    }
]).then()