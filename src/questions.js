const inquirer = require('inquirer');

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?"
    },
    {
        type: 'number',
        name: 'id',
        message: "What is the manager's employee id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email address?"
    },
    {
        type: 'number',
        name: 'office',
        message: "What is the manager's office number?"
    },
    {
        type: 'list',
        name: 'addEmployees',
        message: 'Would you like to add an engineer, intern, or finish building your team?',
        choices: ['Add Engineer', 'Add Intern', "I'm done building my team"],
        default: "Add Engineer"
    }
];
/*
const promptEmployeeData = teamData => {
    // if finished building team
    if (teamData.addEmployees === "I'm done building my team") {
        return;
    }

    // initialize array to hold team in answer hash
    if (!teamData.employees) {
        teamData.employees = [];
    }

    // if adding engineer
    if (teamData.addEmployees === 'Add Engineer')
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?"
            },
            {
                type: 'number',
                name: 'id',
                message: "What is the engineer's employee id?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the engineer's email address?"
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's GitHub username?"
            },
            {
                type: 'list',
                name: 'confirmAddEmployee',
                message: 'Would you like to add another employye to the team?',
                choices: ['Add Engineer', 'Add Intern', "I'm done building my team"],
                default: "I'm done building my team"
            }
        ]).then(engineerData => {
            teamData.employees.push(engineerData);
            return promptEmployeeData(teamData);
        });

    // if adding intern
    if (teamData)
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?"
        },
        {
            type: 'number',
            name: 'id',
            message: "What is the intern's employee id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?"
        },
        {
            type: 'input',
            name: 'school',
            message: "Where does the intern go to school?"
        },
        {
            type: 'list',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee to the team?',
            choices: ['Add Engineer', 'Add Intern', "I'm done building my team"],
            default: "I'm done building my team"
        }
    ]).then(internData => {
        teamData.employees.push(internData);
        return promptEmployeeData(teamData)
    });
}
*/

module.exports = { managerQuestions, promptEmployeeData }