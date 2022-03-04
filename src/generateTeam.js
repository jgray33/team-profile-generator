const Engineer = require("../lib/Engineer");

function buildTeam(team) {
  const createManager = (manager) => {
    return `
// // Put card in here 
// // <div class="card" style="width: 18rem;">
// //  <div class="card-body">
// // <h5 class="card-title">Name: ${manager.name} </h5>
// // <h5 class="card-title"> }</h5>
// // <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// // </div>
// // <ul class="list-group list-group-flush">
// // <li class="list-group-item>ID: ${manager.id()}</li>
// // <li class="list-group-item">Email: ${manager.email()}</li>
// // <li class="list-group-item">Office Number:${
      managerArray.officeNumber
    }</li>
// // </ul>
// // <div class="card-body">
// // </div>
// // </div>`;

    //         `
  };
  const createIntern = (intern) => {};
  const createEngineer = (engineer) => {}

  const fullTeam = [];
  fullTeam
    .push(team)
    .filter((employee) => employee.getRole() == "Manager")
    .map((manager) => createManager(manager));
  fullTeam
    .push(team)
    .filter((intern) => intern.getRole() == "Intern")
    .map((intern) => createIntern(intern)).join();
  fullTeam
    .push(team)
    .filter((Engineer) => engineer.getRole() == "Engineer")
    .map((engineer) => createEngineer(engineer)).join();

  return fullTeam.join();
}

module.exports = (fullTeam) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/src/template.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

    <title>Team sheet </title>
</head>
<body>
  <nav class="navbar fixed-top" style = "background-color: black;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Team Sheet</a>
      </nav>
      
      <main> 
      ${buildTeam(fullTeam)}
      </main>
      
      `;
};

//
