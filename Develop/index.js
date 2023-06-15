const fs = require('fs');
const inquirer = require('inquirer');
const { Square, Triangle, Circle } = require('./lib/shapes');
const SVG = require('./lib/svg');


// Function to prompt for 3 character input
inquirer
  .prompt([
    {
      type: 'input',
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
      type: 'input',
      name: 'color',
      message: 'Enter a color or hexadecimal number:',
    },
    {
      name: 'shape',
      type: 'list',
      message: 'Please choose a shape:',
      choices: ['Circle', 'Triangle', 'Square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color or hexadecimal number '
    },


  ])

  .then(({ text, color, shape, shapeColor }) => {
    const shapeContent = generateShapes(text, color, shape, shapeColor)
    return shapeContent
    // console.log('Generated logo.svg');
  })

  .then((shapeContent) => {
    fs.writeFile('logo.svg', shapeContent, (error) => error ? console.log('Error occured!', error) : console.log('SVG logo created!'))

  })





  // .catch((error) => {
  //   console.error('an error occured:', error);
  // });

function generateShapes(text, color, shape, shapeColor) {
  var shapeInput;
  if (shape === 'Circle') {
    shapeInput = new Circle();
  } else if (shape === 'Triangle') {
    shapeInput = new Triangle();
  } else if (shape === 'Square') {
    shapeInput = new Square();
  } else {
    // alert("Please choose a valid option");
    return 0
  }

  shapeInput.setColor(shapeColor)
  return generateSVGlogo(text, color, shapeInput)
};

// this should hopefully generate the logo
function generateSVGlogo(text, color, shapeInput,) {
  let logo = new SVG()
  logo.setText(text, color)
  logo.setShape(shapeInput)



  return logo.render()
};



