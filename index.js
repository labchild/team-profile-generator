const inquirer = require('inquirer');

const { managerQuestions, promptEmployeeData } = require('./src/questions');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/page-template');
const { writeFile, copyFile } = require('./src/generate-page');

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
            const team = [];

            const manager = new Manager(answers.managerName, answers.id, answers.email, answers.office);
            team.push(manager);

            if (answers.employees) {
                answers.employees.forEach(employee => {
                    if (employee.github) {
                        const engineer = new Engineer(employee.name, employee.id, employee.email, employee.github);

                        team.push(engineer);
                    }

                    if (employee.school) {
                        const intern = new Intern(employee.name, employee.id, employee.email, employee.school);

                        team.push(intern);
                    }
                });
            };
            return team;
        })
        .then(team => {
            return generateHTML(team);
        })
        .then(pageHTML => {
            return writeFile(pageHTML);
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse);
            return copyFile();
        })
        .then(copyFileResponse => {
            console.log(copyFileResponse);
        })
        .catch(err => console.log(err));
};

init(managerQuestions);