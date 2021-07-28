// // SUB FUNCTIONS  
// // EMPLOYEE TITLE AND ICON
// const genTitle = empTitle => {
//     // TO DO: PASS IN EMPLOYEE TITLE FROM INQUIRER
  
//         if (empTitle === "Manager") {
//           return `
//           <i class="fas fa-mug-hot">Manager</i> 
//           `;
//         } else if (empTitle === "Engineer") {
//                 return `
//                 <i class="fas fa-hammer">Engineer</i> 
//                 `;
//         } else if (empTitle === "Intern") {
//             return `
//             <i class="fas fa-school">Intern</i> 
//             `;
//         }
//     };


// // // EMPLOYEE EXTRA INFO
// const genExtraInfo = extraInfo => {
// // TO DO: PASS IN EMPLOYEE TITLE FROM INQUIRER
// // TO DO: PASS IN EMPLOYEE BONUS INFO FROM INQUIRER

//     if (empTitle === "Manager") {
//       return `
//       Office Number: ${managerOfficeNumber} 
//       `;
//     } else if (empTitle === "Engineer") {
//         return `
//         Github: <a href="https://www.github.com/${engGithubName}" class="card-link">${engGithubName}</a> 
//         `;
//       } else if (empTitle === "Intern") {
//         return `
//         School: ${internSchoolName} 
//         `;
//       }
// };

// EMPLOYEE CLASS HERE

// function generateEmployeeCard(empCardInfo) {
//   // const { name, id, email, role, ...extra } = empCardInfo;
//   // const { ...empCardInfo } = empCardInfo;


//     if (!empCardInfo) {
//       return "";
//     } else {    
//       empCardInfo.forEach(empInfo => {
//       return `
//       <div class="card" style="width: 18rem;">
//           <div class="card-body">
//               <h5 class="card-title">${name}</h5>
//               <h6 class="card-subtitle mb-2 text-muted">$ {genTitle(role)}</h6>
//           </div>
//           <ul class="list-group list-group-flush">
//             <li class="list-group-item">ID: ${id}</li>
//             <li class="list-group-item">Email: ${email}</li>
//             <li class="list-group-item">$ {genExtraInfo(extra)}</li>
//           </ul>
//       </div>
//       `
//     }
//     );
//   }
// };


// export function to generate entire page
function generatePage(data) {
    // destructure page data by section
    // const { empName, empId, empEmail, ...extra } = data;

  
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
    
    <body>
      <header>
        <nav class="navbar sticky-top navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <h1 class="page-title text-secondary bg-dark py-2 px-3">Our Team</h1>
                </a>
            </div>
        </nav>
      </header>

      <main class="container">
      ${data.empName}
      </main>

      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy;2020 by Team Generator 9000</h3>
      </footer>


    </body>
    </html>
    `;
  };
  

  module.exports = generatePage;