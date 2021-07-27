// EXTENDS EMPLOYEE

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(empName, empId, empEmail, empOffice) {
       super(empName, empId, empEmail); 
       this.empOffice = empOffice;
    }

    getRole() {
        return "Manager";        
    };
}

module.exports = Manager;
