const inquirer = require('inquirer');
const util = require('util');
const fs = require('fs');

const api = require('./utils/api.js');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { userInfo } = require('os');

const questions = [
    {
        type: 'input',
        message: 'Enter your GitHub username: (Do not include @)',
        name: 'username',
        default: 'arcangyl1963',
        validate(response) {
            if (response.length < 1) {
                return console.log('You did not enter a valid GitHub username. Please try again.');
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Enter your contact email address',
        name: 'email',
        default: 'name@example.com',
        validate(response) {
            if (response.length < 1) {
                return console.log('You did not enter a valid email address. Please try again.');
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Enter the title of your project:',
        name: 'title',
        default: 'My Project Title',
        validate(response) {
            if (response.length < 1) {
                return console.log('You did not enter a valid project title. Please try again.');
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Enter a description of your project:',
        name: 'description',
        default: 'Project Description',
        validate(response) {
            if (response.length < 1) {
                return console.log('You did not enter a valid description. Please try again.');
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Enter step-by-step instructions for installing your project, if applicable. Include details on installing the required dependencies for the developemnt environment:',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter detailed instruction on using your project application:',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Enter the names of any contributors to your project, if applicable:',
        name: 'contributors'
    },
    {
        type: 'input',
        message: 'Enter the names of any tests used for your application, if applicable. Supply examples of how to run them as well:',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'Select a license for your project:',
        choices: ['GPL', 'MIT', 'MPLv2'],
        name: 'license'
    },
];
//Function to write the to file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('The README.md file has been generated successfully.')
    });
}

const asyncWF = util.promisify(writeToFile);
// Async function to invoke the Inquirer prompt questions, retrieve some user info from GitHub, create the markdown copy, and write to file all in the proper sequence
async function init() {
    try {
        const userEntries = await inquirer.prompt(questions);
        console.log('Your submitted responses: ', userEntries);
        console.log('Retrieving your GitHub information now.');
        const userInfo = await api.getUser(userEntries);
        console.log('GitHub user info: ', userInfo);
        console.log('Generating README.md now.');
        const markdown = generateMarkdown(userEntries, userInfo);
        console.log(markdown);
        const rmFileName = userEntries.title.toLowerCase().split(' ').join('') + "_README.md";
        await asyncWF(rmFileName, markdown);
    } catch (error) {
        console.log(error);
    }
};
init();