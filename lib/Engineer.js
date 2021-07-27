// EXTENDS EMPLOYEE

const Employee = require("./Employee.js");

class Engineer extends Employee {
    // constructor(empName, empId, empEmail, empGithub) {
    //    super(empName, empId, empEmail)

    constructor(empName, empGithub) {
    super(empName)
 
       this.empGithub = empGithub;
    }

    getRole() {
        return "Engineer";        
    }
    getGithub(){
        return this.empGithub;
    }
}

module.exports = Engineer;
