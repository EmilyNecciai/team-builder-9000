// EXTENDS EMPLOYEE

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(empName, empId, empEmail, empGithub) {
       super(empName, empId, empEmail); 
       this.empGithub = empGithub;
    }

    getGithub() {
        return this.empGithub;
    };

    getRole() {
        return "Engineer";        
    };
}

module.exports = Engineer;
