class Employee {
    constructor(empName, empId, empEmail, empRole) {

        this.empName = empName;
        this.empEmail = empEmail;
        this.empId = empId;
        this.empRole = empRole;
    }

    getName() {
       return this.empName;
    }

    getId() {
       return this.empId;
    }

    getEmail() {
       return this.empEmail;
    }

    getRole() {
        return this.empRole;

        //return "Manager" || "Engineer" || "Intern";

    }


}

module.exports = Employee;
