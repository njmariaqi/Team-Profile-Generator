const fs = require('fs');
const inquirer = require('inquirer');
const Choice = require('inquirer/lib/objects/choice');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { info } = require('console');
const printInfo = require('./src/print');
const teamArry = [];

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
               const managerInfo = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOffice, 'Manager');
               teamArry.push(printInfo(managerInfo, `Office Number: ${managerInfo.managerOffice}`));
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
               const engineerInfo = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub, 'Engineer');
               teamArry.push(printInfo(engineerInfo, `GitHub: <a href='${engineerInfo.engineerGithub}'>${engineerInfo.engineerGithub}</a>`));
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
               const internInfo = new Intern(data.internName, data.internId, data.internEmail, data.internSchool, 'Intern');
               teamArry.push(printInfo(internInfo, `School: ${internInfo.internSchool}`));
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
                    fs.writeFile('teams.html', 
                    `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                         <meta charset="UTF-8">
                         <meta http-equiv="X-UA-Compatible" content="IE=edge">
                         <meta name="viewport" content="width=device-width, initial-scale=1.0">
                         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
                         <title>Team Profile</title>
                    </head>
                    <body class="container is-max-widescreen" style="margin-top: 45px;">
                         <div class="columns is-multiline">
                         ${teamArry.join('')}
                         </div>
                    </body>
                    </html>
                    `, 
                    (err) => err? console.error(error):console.log('Success!'))
               }
          })
}

askManager();
