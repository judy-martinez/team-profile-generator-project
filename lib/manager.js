const Employee = require('./Employee')

class Manager extends Employee{
    constructor (name, id, email, github) {
        super(name, id, email)
        this.github = github
    }

   getGithub(){
       return this.github
   }
}

module.exports = Manager