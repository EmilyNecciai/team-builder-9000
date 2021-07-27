const Engineer = require("./lib/Engineer.js");
const inquirer = require("inquirer");
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');


const team = []

function promptUser(){
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"

        },
        {
            type: "list",
            name: "role",
            message: "What is your job title?",
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
            message: "What is your Github Username?"
        }
    ]).then(function(engineerAnswer){
        let newEngineer = new Engineer(employeeAnswers.name, engineerAnswer.username )
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
            console.log(team);
        }
    }
    }) 
}


promptUser();