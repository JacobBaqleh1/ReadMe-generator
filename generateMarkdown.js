import inquirer from "inquirer";

const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter project title",
    validate: (input) => {
      if (input === "") {
        return "please enter a valid title ";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "description",
    message:
      "Provide a short description explaining the what, why, and how of your project",
    validate: (input) => {
      if (input === "") {
        return "please enter a valid description ";
      }
      return true;
    },
  },
  // {
  //   table of contents
  // }
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
    validate: (input) => {
      if (input === "") {
        return "please enter installation steps ";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use",
  },
  {
    type: "list",
    name: "license",
    message: "What license does your project have?",
    choices: [
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      "BSD 2-Clause 'Simplified' License",
      "BSD 3-Clause 'New' or 'Revised' License",
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v2.0",
      "GNU Lesser General Public License v2.1",
      "Mozilla Public License 2.0",
      "The Unlicense",
    ],
  },
  {
    type: "input",
    name: "contributing",
    message:
      "List your collaborators, if any, with links to their GitHub profiles",
  },
  {
    type: "input",
    name: "tests",
    message: "Write tests for your application",
  },
  {
    type: "input",
    name: "questions",
    message:
      "Enter your github profile if anyone using your project has questions",
  },
];

console.log("------------Start of the Project------------");
inquirer
  .prompt(questions)
  .then((answers) => {
    // TODO: Create a function that returns a license badge based on which license is passed in
    // If there is no license, return an empty string
    function renderLicenseBadge(license) {}

    // TODO: Create a function that returns the license link
    // If there is no license, return an empty string
    function renderLicenseLink(license) {}

    // TODO: Create a function that returns the license section of README
    // If there is no license, return an empty string
    function renderLicenseSection(license) {}

    // TODO: Create a function to generate markdown for README
    //Title , Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    function generateMarkdown(data) {
      return `# ${data.title}
##Description
${data.description}
## Table of Contents
##Installation
${data.installation}
##Usage
${data.usage}
${renderLicenseSection()}
##Contributing
${data.contributing}
##Tests
${data.tests}
##Questions
${data.questions}
`;
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

export default generateMarkdown;
