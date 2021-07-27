// const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
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
        team.push(newEngineer)
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