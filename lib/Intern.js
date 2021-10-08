const Employee = require('./Employee');

class Intern extends Employee {
     constructor(name, id, email, internSchool, role) {
          super(name, id, email, role);
          this.internSchool = internSchool;
     }
     getSchool() {

     }
     getRole() {

     }
}

module.exports = Intern;