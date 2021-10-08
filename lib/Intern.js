const Employee = require('./Employee');

class Intern extends Employee {
     constructor(name, id, email, internSchool) {
          super(name, id, email);
          this.internSchool = internSchool;
     }
     getSchool() {

     }
     getRole() {

     }
}

module.exports = Intern;