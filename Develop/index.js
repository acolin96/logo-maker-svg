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
