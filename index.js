const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const buildTeam = require("./src/generateTeam");

let teamArr = [];

// Questions ---------------------------------------------------------------------------------
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

let engineerQuestionSet = [...questionsForAll, ...engineerQuestion];
let internQuestionSet = [...questionsForAll, ...internQuestion];
let managerQuestionSet = [...questionsForAll, ...managerQuestion];

// Async functions ---------------------------------------------------------------------------
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
    teamArr.push(manager);
    askAgain();
  }
}

// Asks the user if they want to add another team member, if not, generate the team.
async function askAgain() {
  const askAgainAnswer = await inquirer.prompt(askAgainQ);
  if (askAgainAnswer.newTeamMemberChoice === "Engineer") {
    askEngineer();
  } else if (askAgainAnswer.newTeamMemberChoice === "Intern") {
    askIntern();
  }
  if (askAgainAnswer.newMember === false) {
    generateTeam();
  }
}

// Asks the user the engineer question set and turn the answer into a class that is pushed into the team array
async function askEngineer() {
  const askEngineer = await inquirer.prompt(engineerQuestionSet);
  const engineer = new Engineer(
    askEngineer.name,
    askEngineer.id,
    askEngineer.email,
    askEngineer.gitHub
  );
  teamArr.push(engineer);
  askAgain();
}

// Asks the user the intern question set and turn the answer into a class that is pushed into the team array
async function askIntern() {
  const askIntern = await inquirer.prompt(internQuestionSet);
  const intern = new Intern(
    askIntern.name,
    askIntern.id,
    askIntern.email,
    askEngineer.gitHub
  );
  teamArr.push(intern);
  askAgain();
}

function generateTeam() {
  fs.writeFileSync("./dist/template.html", buildTeam(teamArr), "utf-8");
}

askQuestions();

// Notes --------------------------------------------------------------------------------------------------------

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
