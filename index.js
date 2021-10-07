const fs = require('fs');
const inquirer = require('inquirer');

inquirer
     .prompt([
          {
               type: 'input',
               message: 'What is manager\'s name?',
               name: 'managerName'
          },
          {
               type: 'input',
               message: 'What is manager\'s employee ID?',
               name: 'managerId'
          },
          {
               type: 'input',
               message: 'What is manager\'s email address?',
               name: 'managerEmail'
          },
          {
               type: 'input',
               message: 'What is manager\'s office number?',
               name: 'managerOffice'
          }
     ])