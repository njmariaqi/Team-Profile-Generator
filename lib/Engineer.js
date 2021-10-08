const Employee = require('./Employee');

class Engineer extends Employee {
     constructor(name, id, email, engineerGithub, role) {
          super(name, id, email, role);
          this.engineerGithub = engineerGithub;
     }
     getGithub(){

     }
     getRole() {

     }
}

module.exports = Engineer;