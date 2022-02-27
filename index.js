const fs = require("fs");
const inquirer = require("inquirer");

let teamMembers = [];

let questions = [
  {
    type: "input",
    name: "managerName",
    message:
      "Welcome to the team profile generator, what is the manager's name?",
  },
  {
    type: "input",
    name: "managerId",
    message: "What is your employee Id?",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "what is your email address?",
  },
  {
    type: "input",
    name: "managerNumber",
    message: "And what is your office number?",
  },
  {
    type: "confirm",
    name: "newMember",
    message: "Do you want to add another member?",
  },
  {
    type: "list",
    name: "newTeamMemberChoice",
    message: "Which team member would you like to add in?",
    choices: ["Engineer", "Intern", "Employee"],
    when: (answers) => answers.newMember === true
  },
];

let engineerQuestions = [
    {
      type: "input",
      name: "engineerGitHub",
      message: "What is your engineer's gitHub?",
    },
  ];
  
  let internQuestions = [ {...questions},
    {
      type: "input",
      name: "internSchool",
      message: "Which school did your intern go to?",
    },
    {
      type: "input",
      name: "interId",
      message: "What is your inter's ID?",
    },
  ];

// Team manager questions
// Have questions for team manager, employee, and intern.
// Do an await function depending on the answers to the questions
let engineerQuestionSet = [...questions, engineerQuestions]
let internQuestionSet = [...questions, internQuestions]

async function askQuestions() {
  const answers = await inquirer.prompt(questions);
  teamMembers.push(answers);
  console.log(teamMembers)
  if (answers.newTeamMemberChoice === "Engineer") {
    // If they have answered that they would like to add in another member
    // Ask the next set of questions
    const engineerDetails = await inquirer.prompt(engineerQuestionSet);
    console.log(engineerDetails);
  } teamMembers.push(engineerDetails)
  renderCards()
  }

askQuestions();

function renderCards() {
    console.log(teamMembers)
}

// let answers = await promises.
// teamArr.push(answers)
// console.log(teamArr)
// console.log(answers)

// await function renderCard(teamArr) {
//     let output = `
//        <div class="card" style="width: 18rem;">
//         <div class="card-body">
//     <h5 class="card-title"> ${teamArr[0]}</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     </div>
//     <ul class="list-group list-group-flush">
//     <li class="list-group-item">${teamArr[1]}</li>
//     <li class="list-group-item">${teamArr[2]}</li>
//     <li class="list-group-item">A third item</li>
//     </ul>
//     <div class="card-body">
//     <a href="#" class="card-link">Card link</a>
//     <a href="#" class="card-link">Another link</a>
//     </div>
//     </div>`

//     fs.appendFile("template.html", output)

//     }

// renderCard()

//   const generateHTML = ({
//       managerName,
//       managerId,
//       managerEmail,
//       managerNumber,
//       addTeamMember
//   }) =>

// const addTeamMember

// genericQuestions()

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
