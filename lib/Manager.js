// EXTENDS EMPLOYEE

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(empName, empId, empEmail, empRole, empOffice) {
       super(empName, empId, empEmail, empRole); 
       this.empOffice = empOffice;
    }

    getRole() {
        return "Manager";        
    };
}

module.exports = Manager;
