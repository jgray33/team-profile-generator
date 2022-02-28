const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer")

let teamMembers = [];

let openingQuestion = [
  {
    type: "confirm",
    name: "managerConfirm",
    message:
      "Please start with the team manager's details. Press yes to proceed.",
  },
];

let questionsForAll = [
  {
    type: "input",
    name: "name",
    message: "Please enter the name of the person you would like to add",
  },
  {
    type: "input",
    name: "id",
    message: "Please enter the ID of this person",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the email address of this person",
  },
];

let managerQuestion = [
  {
    type: "input",
    name: "officeNumber",
    message: "And what is this person's office number?",
  },
];

let engineerQuestion = [
  {
    type: "input",
    name: "gitHub",
    message: "What is your engineer's gitHub?",
  },
];

let internQuestion = [
  {
    type: "input",
    name: "school",
    message: "Which school did your intern go to?",
  },
];

let askAgainQ = [
  {
    type: "confirm",
    name: "newMember",
    message: "Do you want to add another team member?",
  },
  {
    type: "list",
    name: "newTeamMemberChoice",
    message: "Which team member would you like to add in?",
    choices: ["Engineer", "Intern"],
    when: (answers) => answers.newMember === true,
  },
];

// Team manager questions
// Have questions for team manager, employee, and intern.
// Do an await function depending on the answers to the questions
let engineerQuestionSet = [...questionsForAll, ...engineerQuestion];
let internQuestionSet = [...questionsForAll, ...internQuestion];
let managerQuestionSet = [...questionsForAll, ...managerQuestion];

// Manager questions, ask if add more
// If want to add more - launch questions set
// Add if want to add more

async function askAgain() {
    const askAgainAnswer = await inquirer.prompt(askAgainQ);
    if (askAgainAnswer.newTeamMemberChoice === "Engineer") {
      askEngineer();
    } else if (askAgainAnswer.newTeamMemberChoice === "Intern") {
      askIntern();
    }
    if (askAgainAnswer.newMember === false){
        renderCards()
    }
  }

async function askQuestions() {
  const managerConfirm = await inquirer.prompt(openingQuestion);
  console.log(managerConfirm);
  if (managerConfirm.managerConfirm === true) {
    //   Ask the manager set of questions
    const managerAnswers = await inquirer.prompt(managerQuestionSet);
    console.log(managerAnswers);
    //    Create new class with the manager's answers
    const manager = new Manager(
      managerAnswers.name,
      managerAnswers.id,
      managerAnswers.email,
      managerAnswers.officeNumber
    );
    //    Push the class into the team member's array.
    teamMembers.push(manager);
    askAgain();
  }
}


async function askEngineer() {
  const askEngineer = await inquirer.prompt(engineerQuestionSet);
  const engineer = new Engineer(
    askEngineer.name,
    askEngineer.id,
    askEngineer.email,
    askEngineer.gitHub
  );
  teamMembers.push(engineer);
  askAgain();
}

function renderCards() {
    console.log(teamMembers);
  }
  
askQuestions();

//

//  function renderCards(teamMembers) {
//      console.log(teamMembers)
//      let output = `
//              <div class="card" style="width: 18rem;">
//               <div class="card-body">
//           <h5 class="card-title">${getName()} </h5>
//           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//           </div>
//           <ul class="list-group list-group-flush">
//           <li class="list-group-item> ${getId()}</li>
//           <li class="list-group-item">${getEmail()}</li>
//           <li class="list-group-item">A third item</li>
//           </ul>
//           <div class="card-body">
//           <a href="#" class="card-link">Card link</a>
//           <a href="#" class="card-link">Another link</a>
//           </div>
//           </div>`

//     fs.appendFile("template.html", output)


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
