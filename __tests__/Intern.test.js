const Intern = require('../lib/Intern.js');

test('creates an Intern object', () => {
    const intern = new Intern("Bob", 12, "bob@gmail.com", "Intern", "West Virginia University");
  
    expect(intern.empName).toEqual(expect.any(String));
    expect(intern.empId).toEqual(expect.any(Number));
    expect(intern.empEmail).toEqual(expect.any(String));
    expect(intern.empRole).toEqual(expect.any(String));
    expect(intern.empSchool).toEqual(expect.any(String));
  });
  