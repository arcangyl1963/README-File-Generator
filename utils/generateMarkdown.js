function generateMarkdown(userEntries, userInfo) {
  let badge;
  badgeFunc = (userEntries) => {
  if (userEntries.license === 'GPL') {
    badge = '![License](https://img.shields.io/badge/License-GPL-blue.svg)';
  } else if (userEntries.license === 'MIT') {
    badge = '![License](https://img.shields.io/badge/License-MIT-green.svg)';
  } else if (userEntries.license === 'LGPL') {
    badge = '![License](https://img.shields.io/badge/License-LGPL-red.svg)';
  } else if (userEntries.license === 'COPYLEFT') {
    badge = '![License](https://img.shields.io/badge/License-COPYLEFT-yellow.svg)';
  } else {
    badge = '';
  }
  return badge;
}
badgeFunc(userEntries);
const createMD = `
# ${userEntries.title}<br>

${badge}<br>

## Description:<br>

- ${userEntries.description}<br>

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

${userEntries.installation}<br>

---

## Usage:<br>

${userEntries.usage}<br>

---
## License:<br>

${badge}<br>${userEntries.license}<br>

---

## Contributors:<br>

${userEntries.contributors}<br>

---

## Tests:<br>

${userEntries.tests}<br>

---

## Questions:<br>


- Feel free to email me with any questions about this project at: ${userEntries.email}<br>

![GitHubAvatar](${userInfo.avatar_url})<br>

- My GitHub profile may be viewed [here:](https://github.com/${userInfo.login})`

return createMD;
}
module.exports = generateMarkdown;
