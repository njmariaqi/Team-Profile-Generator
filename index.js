const fs = require('fs');
const inquirer = require('inquirer');
const Choice = require('inquirer/lib/objects/choice');

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
               const managerData = data;
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
               const engineerData = data;
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
               const internData = data;
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
               }
          })
}

askManager();
