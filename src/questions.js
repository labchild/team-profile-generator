const inquirer = require('inquirer');

const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: "What is the team manager's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Enter the employee's name.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the manager's employee id? (Required)",
        validate: idInput => {
            if (!idInput || isNaN(idInput)) {
                console.log('Employee id must be a number.')
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email address? (Required)",
        validate: emailInput => {
            if (emailInput && emailInput.includes('@')) {
                return true;
            } else {
                console.log("Please enter a valid email address");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'office',
        message: "What is the manager's office number?"
    }
];

const teamQuestions = [
    {
        type: 'list',
        name: 'addEmployees',
        message: 'Would you like to add an engineer, intern, or finish building your team?',
        choices: ['Add Engineer', 'Add Intern', "I'm done building my team"]
    },
    {
        type: 'input',
        name: 'name',
        message: "What is the employee's name? (Required)",
        when: ({ addEmployees }) => {
            if (addEmployees === "I'm done building my team") {
                return false;
            }
            return true;
        },
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Enter the employee's name.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the employee's employee id?",
        when: ({ addEmployees }) => {
            if (addEmployees === "I'm done building my team") {
                return false;
            }
            return true;
        },
        validate: idInput => {
            if (!idInput || isNaN(idInput)) {
                console.log('Employee id must be a number.');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email address?",
        when: ({ addEmployees }) => {
            if (addEmployees === "I'm done building my team") {
                return false;
            }
            return true;
        },
        validate: emailInput => {
            if (emailInput && emailInput.includes('@')) {
                return true;
            } else {
                console.log("Enter the employee's email address.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?",
        when: ({ addEmployees }) => {
            if (addEmployees === "Add Engineer") {
                return true;
            }
            return false;
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "Where does the intern go to school?",
        when: ({ addEmployees }) => {
            if (addEmployees === "Add Intern") {
                return true;
            }
            return false;
        }
    }
];

const promptEmployeeData = teamData => {
    if (!teamData.employees) {
        teamData.employees = [];
    }

    return inquirer.prompt(teamQuestions)
        .then(employeeData => {
            // if done adding employees to team, step out of prompts
            if (employeeData.addEmployees === "I'm done building my team") {
                return teamData;
            }

            // add employee data to answers and add more employees
            teamData.employees.push(employeeData);
            return promptEmployeeData(teamData);
        })
};

module.exports = { managerQuestions, promptEmployeeData }