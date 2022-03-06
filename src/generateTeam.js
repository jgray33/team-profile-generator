const Engineer = require("../lib/Engineer");


function buildTeam(team) {
    // Manager card
  const createManager = (manager) => {
    return `
    <div class="card-c">
        <div class="card" style="width: 25rem;">
          <div class="title-container">
            <div class="card-body">
              <h6 class="card-subtitle "><b> ${manager.employeeName} </b></h6>
            </div>
            <h5 class="card-title"> Manager </h5>
          </div>
          <div class="info-container">
            <p> Employee ID: ${manager.employeeId}</p>
            <p><a href="mailto:${manager.email}" class="card-link"> ${manager.email}</a></p>
            <p> ${manager.officeNumber}</p>
          </div>
        </div>
      </div>
        `
  };

// Engineer card
  const createEngineer = (engineer) => {
      return `
      <div class="card-c">
      <div class="card" style="width: 25rem;">
        <div class="title-container">
          <div class="card-body">
            <h6 class="card-subtitle "><b> ${engineer.employeeName} </b></h6>
          </div>
          <h5 class="card-title"> Engineer </h5>
        </div>
        <div class="info-container">
          <p> Employee ID: ${engineer.employeeId}</p>
          <p><a href="mailto:${engineer.email}" class="card-link"> ${engineer.email}</a></p>
          <p> GitHib profile:<a href="https://www.github.com/${engineer.gitHub}"> ${engineer.gitHub}</a> </p>
        </div>
      </div>
    </div>
      `};
//   Intern card
  const createIntern = (intern) => {
    return `
    <div class="card-c">
    <div class="card" style="width: 25rem;">
      <div class="title-container">
        <div class="card-body">
          <h6 class="card-subtitle "><b> ${intern.employeeName} </b></h6>
        </div>
        <h5 class="card-title"> Intern </h5>
      </div>
      <div class="info-container">
        <p> Employee ID: ${intern.employeeId}</p>
        <p><a href="mailto:${intern.email}" class="card-link"> ${intern.email}</a></p>
        <p>School: ${intern.school}</p>
      </div>
    </div>
  </div>
    `  };
  
  const fullTeam = [];
  const managers = team.filter((employee) => employee.getRole() == "Manager").map((manager) => createManager(manager))
  fullTeam.push(managers)
    const engineers = team.filter((engineer) => engineer.getRole() == "Engineer").map((engineer) => createEngineer(engineer)).join();
fullTeam.push(engineers)
const interns = team.filter((intern) => intern.getRole() == "Intern").map((intern) => createIntern(intern)).join()
  fullTeam.push(interns)
  return fullTeam.join();
}

module.exports = (fullTeam) => {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/dist/template.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  
    <title> Team sheet </title>
  </head>
  
  <body>
  
    <nav class="navbar fixed-top" style="background-color: black;">
      <div class="nav-container">
        <p class="navbar">Team Sheet</p>
      </div>
    </nav>
      
      <main> 
      <div class="card-container">
      ${buildTeam(fullTeam)}
      </div>
      </main>
      
      `;
};

//
