# Team Profile Generator

A Node.js command line application that prompts users for information and generates a webpage to list a team of employees.

### Table of Contents
* [Description](#description)
    * [Built With](#builtwith)
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Questions & Contact](#questions&contact)
* [Acknowledgements](#acknowledgements❣️)

## Description
Team Profile Generator is a node.js command line application that genereates a webpage to list employees on a team and their relevant information. The user interacts with the app entirely from the command line. 

The user is prompted to enter information for a manager, then for each employee on the team. The user can quit at any time. If the user completes the prompts, an HTML file is generated containing the entered information and a stylesheet is attached.

### Built With
* [Inquirer.js](https://www.npmjs.com/package/inquirer)
* [Jest](https://www.npmjs.com/package/jest)
* [Bootstrap](https://getbootstrap.com/)
* Built in [Node.js](https://nodejs.org/en/) JavaScript runtime environment

## Installation
This appliction runs in Node.js.

To Install this project, download or clone the codebase to your local machine. Once you have, navigate to the root directory of the project from your CLI. Run the following command:
```
npm i
```
Team Profile generator is now installed and ready to execute!

## Usage
Watch a [video tutorial]() for step-by-step usage instructions, or follow this guide:

To use Team Profile Generator, navigate to the project root directory from your CLI. Run the command ``` node index.js ``` or ``` npm start ```.
![step 1](step-1.png)

Answer the prompts as they appear by entering your response directly into the command line.
![step 2](step-2.png)

When you finish answering the prompts, you will be notified that your HTML file is ready.
![step 3](step-3.png)

Navigate to ```/dist``` to find your HTML file and a stylesheet. Use your new webpage however you choose, but remember to bring the stylesheet with!
![step 4](step-4.png)

You can quit the program at any time by pressing Ctrl + C (^C).

## Tests
This project includes unit tests on classes using the [Jest](https://www.npmjs.com/package/jest) library. If you wish to alter the models used to create employees, the tests suites can help indicate that the program will still execute successfully.

Check out this [video]() demonstrating each test suite passing.

## Questions & Contact
Written and deployed by Lelah Bates Childs.

You can find me on GitHub [@labchild](https://github.com/labchild) or [email me](mailto:labchilds@gmail.com). If you have any questions about this project, please reach out. If you encounter any bugs or other problems, [submit an issue](https://github.com/labchild/team-profile-generator/issues).

### Want to Help?
Do you see something I missed or a more succint and effective way this code can be written? Great! Please reach out and let me know how I can improve. Thanks in advance for your tips, tricks, and pointers!

## Acknowledgements ❣️
Thank you to my bootcamp instructional team and cohort, for helping me along this journey to become a developer.