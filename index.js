const inquirer = require('inquirer');
const { managerQuestions, promptEmployeeData } = require('./src/questions');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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
                    if (employee.github) {
                        const engineer = new Engineer(employee.name, employee.id, employee.email, employee.github);

                        console.log(JSON.stringify(engineer));
                    }

                    if (employee.school) {
                        const intern = new Intern(employee.name, employee.id, employee.email, employee.school);

                        console.log(JSON.stringify(intern));
                    }
                })
            }
        });
};

init(managerQuestions);