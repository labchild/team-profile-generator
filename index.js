const inquirer = require('inquirer');
const { managerQuestions, promptEmployeeData } = require('./src/questions');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

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

            if (answers.employees) {
                answers.employees.forEach(employee => {
                    const engineer = new Engineer (employee.name, employee.id, employee.email, employee.github);

                    console.log(JSON.stringify(engineer));
                })
            }
        });
};

init(managerQuestions);