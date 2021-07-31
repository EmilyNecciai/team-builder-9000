// EXTENDS EMPLOYEE

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(empName, empId, empEmail, empRole, empSchool) {
       super(empName, empId, empEmail, empRole); 
       this.empSchool = empSchool;
    }

    getRole() {
        return "Intern";        
    };
}

module.exports = Intern;
