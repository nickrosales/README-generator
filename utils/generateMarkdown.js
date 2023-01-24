//function checks the license from the user input and adds the badge 
function renderLicenseBadge(license) {
  let badge = ['MIT', 'GPLv2', 'Apache', 'BSD 3-clause', 'BSD 2-clause', 'LGPLv3', 'AGPLv3', 'none']
  if(license === badge[0]){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'

  } else if(license === badge[1]){
    return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'

  } else if(license === badge[2]){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    
  } else if(license === badge[3]){
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    
  } else if(license === badge[4]){
    return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
    
  } else if(license === badge[5]){
    return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
    
  } else if(license === badge[6]){
    return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
    
  } else {
    return ''
  }
}
//function adds the license frmo the user input to a string. if the user input was none then it adds there was no license  
function renderLicenseInfo(license){
  let LicenseInfo
  if(license !== 'none'){
    licenseInfo = `this project is licensed under the ${license} license.`
  } else {
    licenseInfo = `No license`
  }
  return licenseInfo

}

//generates the markdown file with all the user input
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license)
  const licenseInfo = renderLicenseInfo(data.license)
  const template = `# ${data.title} ${badge}

## Description

${data.desc}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}

## License

${licenseInfo}

## Contributing

${data.contributing}

## Tests

${data.test}

## Questions

Github username: [${data.gitHub}](https://www.github.com/${data.gitHub})

Email: ${data.email}

  `; 
  return template;
}

module.exports = generateMarkdown;
