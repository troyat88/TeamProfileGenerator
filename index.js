const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

function selectProfile(){
    inquirer
    .prompt ([
       {
        type: 'checkbox',
        message: 'What type of profile do you want to create?',
        name: 'genProfile',
        choices: ['Employee', 'Manager', 'Engineer', 'Intern'],  
       } 

    ])
}
function addMember(){
    inquirer
    .prompt ([
       {
        type: 'confirm',
        message: 'Do you want to add another profile?',
        name: 'addMember',
       } 

    ])
}

function addEmployee () {
    inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Please enter employee name:',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter employee id:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter employee email:',
    },
    
])
}

function addManager () {
    inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Please enter manger name:',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter manager id:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter manager email:',
    },
    {
        type: 'input',
        name: 'offNumber',
        message: 'Enter manager office number:',
      },
    
])
}

function addEngineer () {
    inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Please enter engineer name:',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter engineer id:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter engineer email:',
    },
    {
        type: 'input',
        name: 'git',
        message: 'Enter engineer GitHub username',
      },
    
])
}

function addIntern () {
    inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Please enter intern name:',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter intern id:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter intern email:',
    },
    {
        type: 'input',
        name: 'school',
        message: 'Enter the intern school:',
      },
    
])
}





