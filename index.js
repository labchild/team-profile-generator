const inquirer = require('inquirer');
const { managerQuestions, promptEmployeeData } = require('./src/questions');
const Employee = require('./lib/Employee');

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
            const employee = new Employee(answers.name, answers.id, answers.email);

            console.log(JSON.stringify(employee));
        });
};

init(managerQuestions);