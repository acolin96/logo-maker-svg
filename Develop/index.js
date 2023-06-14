const fs = require('fs');
const inquirer = require('inquirer');


// Function to prompt for 3 character input
 inquirer
  .prompt([
    {
    name: 'text',
    message: 'Enter up to three characters:',
    validate: function (input) {
      if (input.length <= 3) {
        return true;
      }
      return 'Please enter up to three characters.';
    },

},
{
    name: 'color',
    message: 'Enter a color or hexadecimal number:',   
},
{
    name: 'shape',
    type: 'list',
    message: 'Please choose a shape:',
    choices: ['circle', 'triangle', 'square']
},
{
    name: 'shapeColor',
    message: 'Enter a color or hexadecimal number '
},


])

.then((answers) => {
const { text, color, shape, shapeColor } = answers;
const svgLogo = generateSVGlogo(text, color, shape, shapeColor);
return writeSVGToFile(svgLogo);

})

.then(() => {
    console.log('Generated logo.svg');
})
.catch((error) => {
    console.error('an error occured:', error);
});

const generateSVGlogo = (text, color,  shape, shapeColor) => {
    
    return `
    <svg width="300" height="200">
      <style>
        text {
          fill: ${color};
          text-anchor: middle;
        }
        ${shape} {
          fill: ${shapeColor};
        }
      </style>
      <text x="150" y="100">${text}</text>
      <${shape} cx="150" cy="150" r="50" />
    </svg>
  `;
};

const writeSVGToFile = (content) => {
    return new Promise((resolve, reject) => {
      fs.writeFile('logo.svg', content, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  };



