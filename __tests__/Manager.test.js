const Manager = require('../lib/Manager.js');

test('creates an Manager object', () => {
    const manager = new Manager("Bob", 12, "bob@gmail.com", "Manager", 35);
  
    expect(manager.empName).toEqual(expect.any(String));
    expect(manager.empId).toEqual(expect.any(Number));
    expect(manager.empEmail).toEqual(expect.any(String));
    expect(manager.empRole).toEqual(expect.any(String));
    expect(manager.empOffice).toEqual(expect.any(Number));
  });
  