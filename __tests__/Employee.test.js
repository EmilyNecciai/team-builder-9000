const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee("Bob", 12, "bob@gmail.com", "Engineer");
  
    expect(employee.empName).toEqual(expect.any(String));
    expect(employee.empId).toEqual(expect.any(Number));
    expect(employee.empEmail).toEqual(expect.any(String));
    expect(employee.empRole).toEqual(expect.any(String));


  });
  
