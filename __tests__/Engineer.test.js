const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer("Bob", 12, "bob@gmail.com", "Engineer", "BobGithub");
  
    expect(engineer.empName).toEqual(expect.any(String));
    expect(engineer.empId).toEqual(expect.any(Number));
    expect(engineer.empEmail).toEqual(expect.any(String));
    expect(engineer.empRole).toEqual(expect.any(String));
    expect(engineer.empGithub).toEqual(expect.any(String));


  });
  
