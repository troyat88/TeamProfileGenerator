const inquirer = require("inquirer");
const fs = require("fs");
const createCardsArray = require("./src/HTML");

const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");



var teamArray = []

//RETURNS PROMPTS BASED ON USER SELECTION OF TYPE OF PROFILE TO CREATE
const selectProfile = () =>{
    inquirer
    .prompt ([
       {
        type: 'checkbox',
        message: 'What type of profile do you want to create?',
        name: 'genProfile',
        choices: ['Manager', 'Engineer', 'Intern'],  
       } 
    ])
    .then((selectedProfile) => {
        let {genProfile} = selectedProfile;
        if (genProfile == "Manager"){
            return addManager();
        }
        if (genProfile == "Engineer"){
            return addEngineer();
        }if (genProfile == "Intern"){
            return addIntern();
        }else {
            console.log('Something has gone wrong')
        }

    });
}

// DETERMINES WHETHER TO ADD ANOTHER MEMBER returns selectProfile() or whether to create HTML
const addMember = ()=>{
    inquirer
    .prompt ([
       {
        type: 'confirm',
        message: 'Do you want to add another profile? (selecting "No" will create your page)',
        name: 'addTeam',
        default: false
       } 

    ])
    .then((confirmation) => {
        let {addTeam} = confirmation;
    if (addTeam) {
        return selectProfile()
    }if (!addTeam) { fs.writeFile('team.html', createCardsArray(teamArray), (err) =>
    err ? console.log(err) : console.log('Team Page Created!'))
          
    }
    })
}


//PROMPTS FOR MANAGER, ADDS OBJECT TO ARRAY
const addManager = () => {
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
        name: 'officeNumber',
        message: 'Enter manager office number:',
      },
    
])
.then(managerData => {
    const {name, id, email, officeNumber} = managerData;
    const manager = new Manager(name, id, email, officeNumber)
    teamArray.push(manager)
    console.log(manager)
    console.log('manager profile created.')
    addMember()
})
}

// PROMPTS FOR ENGINEER, ADDS OBJECT TO ARRAY
const addEngineer = () => {
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
.then(EngineerData => {
    const {name, id, email, git} = EngineerData;
    const engineer = new Engineer(name, id, email, git)
    teamArray.push(engineer)
    console.log(engineer)
    console.log('engineer profile created.')
    addMember()
})
}

//PROMPTS FOR INTERN, ADDS OBJECT TO ARRAY
const addIntern = () => {
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
.then(internData => {
    const {name, id, email, school} = internData;
    const intern = new Intern(name, id, email, school)
    teamArray.push(intern)
    console.log(intern)
    console.log('intern profile created.')
    addMember()
})
}

//const createFile = data => {
    //fs.writeFile('team.html', data, (err) =>
        //err ? console.log(err) : console.log('Team Page Created!'))
//}


addManager()

//createCardsArray(teamArray);   



    





