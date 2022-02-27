const inquirer = require("inquirer")


const genericQuestions = () => {
inquirer
  .prompt([
      {
          type: "input",
          name: "managerName",
          message: "Welcome to the team profile generator, what is the manager's name?",
      },
      {
          type: "input",
          name: "managerId",
          message: "What is your employee Id?",
      }, 
      {
          type: "input",
          name: "managerEmail",
          message:"what is your email address?"
      },
      {
          type: "input",
          name: "managerNumber",
          message: "And what is your office number?",
      }
  ])
  .then((answers) => {
    managerAnswers = answers
  })
  



  
launchQuestions()



// HTML Webpage
// Summaries for each person 
// Unit test for every part
// Inquirer 
// a) Team manager's name
// b) Employee ID
// c) Email address
//  d) Office phone number
// Do you want to add another? Yes/No
// If yes - Is it an engineer or an inter? 
// If intern:
// a)Name
// b) ID
// c) Email 
// d) gitHub username
// If engineer: 
// a) NAme
// b) Email 
// c) School
// If finished? HTML is generated. 

