// EXTENDS EMPLOYEE

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(empName, empId, empEmail, empSchool) {
       super(empName, empId, empEmail); 
       this.empSchool = empSchool;
    }

    getRole() {
        return "Intern";        
    };
}

module.exports = Intern;
