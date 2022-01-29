const inquirer = require('inquirer');
const { managerQuestions, promptEmployeeData } = require('./src/questions');
const Manager = require('./lib/Manager');

// function to call app
const init = (leadQuestions) => {
    console.log(`
=========================================
    Welcome to Team Profile Generator
=========================================
`);

    return inquirer.prompt(leadQuestions)
        .then(promptEmployeeData)
        .then(answers => {
            console.log('made it!')
            const manager = new Manager(answers.managerName, answers.id, answers.email, answers.office);

            console.log(JSON.stringify(manager));
        });
};

init(managerQuestions);