class Employee {
    // constructor(empName, empId, empEmail) {
    constructor(empName) {

        this.empName = empName;
        // this.empEmail = empEmail;
        // this.empId = empId;
    }

    getName() {
       return this.empName;
    }

    // getId() {
    //    return this.empId
    // }

    // getEmail() {
    //    return this.empEmail
    // }

    getRole() {
        return "Manager" || "Engineer" || "Intern"

        //I'm not sure what this means??

    }


}

module.exports = Employee;
