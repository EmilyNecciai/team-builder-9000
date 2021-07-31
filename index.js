const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
var fs = require('fs');
const inquirer = require("inquirer");
const generatePage = require('./src/page-template');



const team = [];

function promptUserManager(){
    console.log(`
==========================================
Add a Manager To Start Building Your Team
==========================================
        `);    

    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's id? (Numbers Only)"
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email address?"
        },
        {
            type: 'input',
            name: "office",
            message: "What is the manager's office number?"
        }
    ]).then(function(managerAnswer){
        managerAnswer.role = "Manager";
        let newManager = new Manager(managerAnswer.name, managerAnswer.id, managerAnswer.email, managerAnswer.role, managerAnswer.office)
        team.push(newManager);
        addOrFinish(team);
    })
}

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
            choices: ["Engineer", "Intern"]
        }

    ]).then(function(answers) {
        if(answers.role === "Engineer"){
            return engineerQuestions(answers);
        } else if(answers.role === "Intern"){
            return internQuestions(answers);
        }
    })
}


function engineerQuestions(employeeAnswers){
    return inquirer
    .prompt([
        {
            type: 'input',
            name: "username",
            message: "What is the employee's Github Username?"
        }
    ]).then(function(engineerAnswer){
        let newEngineer = new Engineer(employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, employeeAnswers.role, engineerAnswer.username)
        team.push(newEngineer);
        console.log("Your team so far:");
        console.log(team);
        addOrFinish(team);
    })
}


function internQuestions(employeeAnswers){
    return inquirer
    .prompt([
        {
            type: 'input',
            name: "school",
            message: "What is the name of the school the intern attends?"
        }
    ]).then(function(internAnswer){
        let newIntern = new Intern(employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, employeeAnswers.role, internAnswer.school)
        team.push(newIntern);
        console.log("Your team so far:");
        console.log(team);
        addOrFinish(team);
    })
};

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);

        console.log("Team file generated! In your browser, open index.html (in the dist folder) to see it!")
    })
};


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
            writeToFile("./dist/index.html", generatePage(team));
        }
    }
    })
};


promptUserManager();

