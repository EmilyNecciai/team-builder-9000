const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");

const inquirer = require("inquirer");
// const generatePage = require('./src/page-template');
// const { writeFile, copyFile } = require('./utils/generate-site');


const team = [];

function promptUser(){
    console.log(`
=================
Add a New Employee
=================
        `);    

    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the employee's name?"

        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's id? (Numbers Only)"

        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email address?"

        },
        {
            type: "list",
            name: "role",
            message: "What is the employee's title?",
            choices: ["Manager", "Engineer", "Intern"]
        }

    ]).then(function(answers) {
        if(answers.role === "Engineer"){
            return engineerQuestions(answers);
        } else if(answers.role === "Manager"){
            return managerQuestions(answers);
        } else if(answers.role === "Intern"){
            return internQuestions(answers);
        }


    })
}

function engineerQuestions(employeeAnswers){
    return inquirer.prompt([
        {
            type: 'input',
            name: "username",
            message: "What is the employee's Github Username?"
        }
    ]).then(function(engineerAnswer){
        let newEngineer = new Engineer(employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, engineerAnswer.username)
        // console.log("ADDED AN ENGINEER", newEngineer)
        team.push(newEngineer);
        console.log("Your team so far:");
        console.log(team);
        addOrFinish(team);
    })
}


function managerQuestions(employeeAnswers){
    return inquirer.prompt([
        {
            type: 'input',
            name: "office",
            message: "What is the manager's office number?"
        }
    ]).then(function(managerAnswer){
        let newManager = new Manager(employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, managerAnswer.office)
        // console.log("ADDED A MANAGER", newManager)
        team.push(newManager);
        console.log("Your team so far:");
        console.log(team);
        addOrFinish(team);
    })
}


function internQuestions(employeeAnswers){
    return inquirer.prompt([
        {
            type: 'input',
            name: "school",
            message: "What is the name of the school the intern attends?"
        }
    ]).then(function(internAnswer){
        let newIntern = new Intern(employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, internAnswer.school)
        // console.log("ADDED AN INTERN", newIntern)
        team.push(newIntern);
        console.log("Your team so far:");
        console.log(team);
        addOrFinish(team);
    })
}

function addOrFinish(team) {
    inquirer
    .prompt([
        {
            type: "confirm",
            name: "confirmAdd",
            message: "Would you like to add another employee?",
            default: false
        } 
    ])
    .then(teamData => {
        {
        if (teamData.confirmAdd) {
            return promptUser();
        } else {
            // return generatePage(team);
            console.log("Your team:");
            console.log(team);
        }
    }
    }) 
}


promptUser();

    // .then(promptEmp)
    // .then(empData => {
    //     return generatePage(empData);
    // })
    // .then(pageHTML => {
    //     return writeFile(pageHTML);
    // })
    // .then(writeFileResponse => {
    //     console.log(writeFileResponse);
    //     return copyFile();
    // })
    // .then(copyFileResponse => {
    //     console.log(copyFileResponse);
    // })
    // .catch(err => {
    //     console.log(err);
    // });
