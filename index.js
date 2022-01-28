const inquirer = require('inquirer');
const { managerQuestions, promptEmployeeData } = require('./src/questions');

// function to call app
const init = (leadQuestions) => {
    console.log(`
=========================================
    Welcome to Team Profile Generator
=========================================
`);

inquirer.prompt(leadQuestions)
    .then(promptEmployeeData)
    .then(teamData => console.log(JSON.stringify(teamData)));
};

init(managerQuestions);