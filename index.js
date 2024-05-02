const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Provide a short description for your project.",
    name: "description",
  },
  {
    type: "input",
    message: "Provide the link to the live page here.",
    name: "page",
  },
  {
    type: "input",
    message:
      "Please describe any steps necessary for installation of your project.",
    name: "installation",
  },
  {
    type: "input",
    message: "Please provide instructions and examples for use.",
    name: "usage",
  },
  {
    type: "list",
    message: "Please choose a license.",
    name: "license",
    choices: [
      "MIT License",
      "Apache License 2.0",
      "GNU Affero General Public License v2.0",
      "GNU General Public License v3.0",
      "GNU Lesser General Public License v2.1",
      "Mozilla Public License 2.0",
      "Boost Software License 1.0",
      "The Unlicense",
      "BSD 2-Clause Simplified License",
      "BSD 3-Clause New or Revised License",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
      "no license",
    ],
    default: "MIT License",
  },
  {
    type: "checkbox",
    message: "What libraries were used in this project?",
    name: "libraries",
    choices: [
      "Bootstrap.com",
      "jQuery.com",
      "Next.js",
      "Node.js",
      "React.js",
      "Vue.js",
      "Workbox",
    ],
  },
  {
    type: "input",
    message: "How can others contribute to this project?",
    name: "contributions",
    default: "Fork this repository, then clone it.",
  },
  {
    type: "input",
    message:
      "Please provide any information about testing you wish to include.",
    name: "tests",
  },
  {
    type: "input",
    message: "Please list any credits, separated by commas.",
    name: "credits",
  },
  {
    type: "input",
    message: "What is your github username?",
    name: "ghUsername",
    default: "MelissaCade",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
    default: "melissascade@gmail.com",
  },
];

async function writeToFile(README, data) {
  await fs.writeFile("./output/generated-README.md", data, (error) => {
    if (error) {
      return console.log(error);
    } else {
      console.log("README file successfully created!");
    }
  });
}

async function promptUser() {
  try {
    const userInput = await inquirer.prompt(questions);
    console.log("Your README is being generated...");
    const markdown = generateMarkdown(userInput);
    await writeToFile(userInput, markdown);
  } catch (error) {
    console.log(error);
  }
}

promptUser();
