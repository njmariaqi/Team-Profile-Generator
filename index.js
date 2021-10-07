const fs = require('fs');
const inquirer = require('inquirer');
const Choice = require('inquirer/lib/objects/choice');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const engineerArry = [];
const internArry = [];
const managerArry = [];

function askManager() {    
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
          .then(data => {
               const managerInfo = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOffice);
               managerArry.push(managerInfo);
               mainMenu();
          })
}

function askEngineer() {
     inquirer
          .prompt([
               {
                    type: 'input',
                    message: 'What is engineer\'s name?',
                    name: 'engineerName'
               },
               {
                    type: 'input',
                    message: 'What is engineer\'s employee ID?',
                    name: 'engineerId'
               },
               {
                    type: 'input',
                    message: 'What is engineer\'s email address?',
                    name: 'engineerEmail'
               },
               {
                    type: 'input',
                    message: 'What is engineer\'s GitHub username?',
                    name: 'engineerGithub'
               }
          ])
          .then(data => {
               const engineerInfo = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
               engineerArry.push(engineerInfo);
               mainMenu();
          })
}      

function askIntern() {
     inquirer
          .prompt([
               {
                    type: 'input',
                    message: 'What is intern\'s name?',
                    name: 'internName'
               },
               {
                    type: 'input',
                    message: 'What is intern\'s employee ID?',
                    name: 'internId'
               },
               {
                    type: 'input',
                    message: 'What is intern\'s email address?',
                    name: 'internEmail'
               },
               {
                    type: 'input',
                    message: 'What is intern\'s school?',
                    name: 'internSchool'
               }
          ])
          .then(data => {
               const internInfo = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
               internArry.push(internInfo);
               mainMenu();
     })
}      

function mainMenu() {
     inquirer
          .prompt([
               {
                    type: 'checkbox',
                    message: 'What do you want to add?',
                    name: 'mainMenu',
                    choices: ['Add an engineer', 'Add an intern', 'Finish building my team']
               }
          ])
          .then(data => {
               const mainMenuChoice = data.mainMenu.join();
               if (mainMenuChoice === 'Add an intern') {
                    askIntern();
               } else if (mainMenuChoice === 'Add an engineer') {
                    askEngineer();
               } else {
                    console.log('You have finished building the team!');
                    console.log(managerArry);
                    console.log(engineerArry);
                    console.log(internArry);
               }
          })
}

askManager();
