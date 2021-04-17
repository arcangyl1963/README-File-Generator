function generateMarkdown(userEntries, userInfo) {
  let badge;
  let licText;
  badgeFunc = (userEntries) => {
  if (userEntries.license === 'GPL') {
    badge = '![License](https://img.shields.io/badge/License-GPL-blue.svg)',
    licText = "Copyright 2021 Arcangyl Studios<br>This program is free software: you can redistribute it and/or modify<br>    it under the terms of the GNU General Public License as published by<br>    the Free Software Foundation, either version 3 of the License, or<br>    (at your option) any later version.<br><br>    This program is distributed in the hope that it will be useful,<br>    but WITHOUT ANY WARRANTY; without even the implied warranty of<br>    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the<br>    GNU General Public License for more details.<br><br>    You should have received a copy of the GNU General Public License<br>    along with this program.  If not, see [https://www.gnu.org/licenses/](https://www.gnu.org/licenses/).";
  } else if (userEntries.license === 'MIT') {
    badge = '![License](https://img.shields.io/badge/License-MIT-green.svg)',
    licText = "Copyright 2021 Arcangyl Studios<br>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:<br>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.<br>THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.";
  } else if (userEntries.license === 'MPLv2') {
    badge = '![License](https://img.shields.io/badge/License-MPLv2-yellow.svg)',
    licText = "Copyright 2021 Arcangyl Studios. License terms can be found [here](https://www.mozilla.org/en-US/MPL/2.0/).";
  } else {
    badge = '',
    licText = "";
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

${badge}<br>This software is licensed under an ${userEntries.license} license:<br><br>${licText}<br>

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
