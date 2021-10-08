const Employee = require('./Employee');

class Manager extends Employee {
     constructor(name, id, email, managerOffice, role) {
          super(name, id, email, role);
          this.managerOffice = managerOffice
     }
     getRole() {

     }
}

module.exports = Manager;