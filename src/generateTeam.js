const { test } = require("picomatch");
const { terminalWidth } = require("yargs");
const Engineer = require("../lib/Engineer");


function buildTeam(team) {
    // Manager card
  const createManager = (manager) => {
    return `
    <div id="engineer-card" class="card" style="width: 20rem;">
      <div class="card-body">
        <h5 class="card-title"> ${manager.employeeName}</h5>
        <h6 class="card-subtitle mb-2 text-muted"> <b> Manager </b></h6>
        <p><b> Employee ID:</b> ${manager.employeeId}</p>
        <p><a href="#">${manager.email}</a></p>
        <p>${manager.officeNumber}</p>
      </div>
    </div>
        `
  };

// Engineer card
  const createEngineer = (engineer) => {
      return `
      <div class="card" style="width: 20rem;">
      <div class="card-body">
        <h5 class="card-title"> ${engineer.employeeName} </h5>
        <h6 class="card-subtitle mb-2 text-muted"><b> Engineer </b></h6>
        <p><b> Employee ID: </b> ${engineer.employeeId}</p>
        <p><a href="#" class="card-link">${engineer.email}</a></p>
        <p><a href="#" class="card-link"> ${engineer.gitHub} </a></p>
      </div>
    </div>
      `};
//   Intern card
  const createIntern = (intern) => {
    return `
    <div class="card" style="width: 20rem;">
          <div class="card-body">
            <h5 class="card-title"> ${intern.employeeName} </h5>
            <h6 class="card-subtitle mb-2 text-muted"><b> Intern </b></h6>
            <p> <b>Employee ID: </b> ${intern.employeeId}</p>
            <p><a href="#" class="card-link">${intern.email}</a></p>
            <p><b>School:</b> ${intern.school}</p>
          </div>
        </div>
    `  };
  
  const fullTeam = [];
  const managers = team.filter((employee) => employee.getRole() == "Manager").map((manager) => createManager(manager))
  fullTeam.push(managers)
  const interns = team.filter((intern) => intern.getRole() == "Intern").map((intern) => createIntern(intern)).join()
  fullTeam.push(interns)
  const engineers = team.filter((engineer) => engineer.getRole() == "Engineer").map((engineer) => createEngineer(engineer)).join();
fullTeam.push(engineers)
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
