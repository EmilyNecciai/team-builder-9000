const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Bob');
  
    expect(employee.name).toBe('Bob');
    expect(employee.id).toEqual(expect.any(Number));
    
  });
  
