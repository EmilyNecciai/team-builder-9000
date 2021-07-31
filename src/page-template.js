// SUB FUNCTIONS  
// EMPLOYEE TITLE AND ICON
const genTitle = empTitle => {
    // TO DO: PASS IN EMPLOYEE TITLE FROM INQUIRER
  
        if (empTitle === "Manager") {
          return `
          <i class="fas fa-mug-hot">Manager</i> 
          `;
        } else if (empTitle === "Engineer") {
                return `
                <i class="fas fa-hammer">Engineer</i> 
                `;
        } else if (empTitle === "Intern") {
            return `
            <i class="fas fa-school">Intern</i> 
            `;
        }
    };

// // EMPLOYEE EXTRA INFO
function genExtraInfo(empRole, empGithub, empOffice, empSchool) {
  if (empRole === "Manager") {
    return `
    Office Number: ${empOffice} 
    `;
  } else if (empRole === "Engineer") {
      return `
      Github: <a href="https://www.github.com/${empGithub}" target="_blank" class="card-link">${empGithub}</a> 
      `;
    } else if (empRole === "Intern") {
      return `
      School: ${empSchool} 
      `;
    }
};

// EMPLOYEE CLASS HERE
function generateEmployeeCard(data) {
    if (!data) {
      return "";
    } else {
      let employeeData = '';

      data.forEach(emp => {
        const individualEmp = `
        <div class="card" style="margin:2%">
            <div class="card-body">
                <h5 class="card-title">
                  ${emp.empName}
                </h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  ${genTitle(emp.empRole)}
                </h6>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${emp.empId}</li>
                  <li class="list-group-item">Email: <a href="mailto:${emp.empEmail}" class="card-link">${emp.empEmail}</a></li>
                  <li class="list-group-item">${genExtraInfo(emp.empRole, emp.empGithub, emp.empOffice, emp.empSchool)}</li>
                </ul>  
            </div>
        </div>
        `;
        // console.log(individualEmp);
        employeeData += individualEmp; 
        // console.log(employeeData);

      });
    return employeeData;
}
};

// export function to generate entire page
function generatePage(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Builder 9000</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    </head>
    
    <body style="background-color: #171717;">
      <header>
        <nav class="navbar sticky-top navbar-light bg-dark">
          <div class="container-fluid">
                  <h1 class="page-title text-secondary bg-dark py-2 px-3">Our Team</h1>
            </div>
        </nav>
      </header>

      <main class="container" style="padding:2%; display:flex; flex-wrap: wrap; justify-content: center;">
      ${generateEmployeeCard(data)}
      </main>

      <footer class="container text-center py-3">
      <h3 class="text-light">&copy;2021 by Team Generator 9000</h3>
      </footer>


    </body>
    </html>
    `;
  };
  

  module.exports = generatePage;



