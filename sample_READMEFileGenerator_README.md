
# README File Generator<br>

![License](https://img.shields.io/badge/License-MIT-green.svg)<br>

## Description:<br>

A CLI application to generate a clean, detailed README.md file from user date input for a series of question prompts. The application uses JavaScript, Node.JS, Axios, and Inquirer packages to facilitate the generation of the file. Inquirer prompts are uses to display the questions to the user and collect the input data. Axios was used to request user information from the GitHub API. Node.JS is the framework within which the application runs.<br>

The purpose of the application is to present the user with a simple interface to input their project information based on prompts and then have a README file generated with all of their project's copy formatted nicely for the README file to include in their project repository.<br>

---


## Table of Contents<br>

[Installation](#installation)<br>

[Usage](#usage)<br>

[License](#license)<br>

[Contributors](#contributors)<br>

[Tests](#tests)<br>

[Questions](#Questions)<br>

---

## Installation:<br>

My files can be accessed in the repository [HERE](https://github.com/arcangyl1963/README-File-Generator)
The image below shows the repository where my project files are located:

![README File Generator Repository](./assets/images/readme_file_generator_repo.png)

Install the application by cloning the repo from the link above or by downloading the files to your local drive.

The repository will contain all of the files needed to run the application:

* A 'utils' directory containing the module scripts for the API requests and the generation of the markdown text.
* A package.json file that contains the dependencies required for the application to run.
* An index.js script file that is the core of the application which the user invokes to run the application.

First begin by installing any dependencies required to run the application and to setup the development environment on your local repository.<br>

In Terminal or a similar bash command-line utility, navigate to the working directory and enter:<br>

~~~
npm install
~~~

This will install any packages dependencies defined in the package.json file.
Now that the required packages have been installed, the application can be launched.

---

## Usage:<br>
To launch the application type the following into Terminal or the command-line utility of your choice:

~~~
node index.js
~~~

The first question prompt will appear if the launch is successful. Read each question carefully and enter you answers for each prompt.

You may also watch a brief walk-through video explaining each step [here](https://youtu.be/XDMwxvk2HXE).


---
## License:<br>

![License](https://img.shields.io/badge/License-MIT-green.svg)<br>This software is licensed under an MIT license:<br><br>Copyright © 2021 Arcangyl Studios<br><br>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:<br>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.<br>THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.<br>

---

## Contributors:<br>

James Harris<br>

---

## Tests:<br>

No tests were created for this application.<br>

---

## Questions:<br>


- Feel free to email me with any questions about this project at: arcangyl@gmail.com<br>

![GitHubAvatar](https://avatars.githubusercontent.com/u/77169680?v=4)<br>

- My GitHub profile may be viewed by clicking [here](https://github.com/arcangyl1963).