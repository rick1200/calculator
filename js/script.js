// select all the buttons
const buttons = document.querySelectorAll('button');
// select the <input type="text" class="display" disabled> element
const display = document.querySelector('.display');

// Initial display value
display.value = '0';

// add eventListener to each button
buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});

// calculate function
function calculate(event) {
  // current clicked buttons value
  const clickedButtonValue = event.target.value;
  
  // If the initial value in the display is 0, clear the display and show the next number that is input
  if (display.value === '0') {
    display.value = '';
  }

  if (clickedButtonValue === '=') {
    // check if the display is not empty then only do the calculation
    if (display.value !== '') {
      // calculate and show the answer to display
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === 'C') {
    // clear everything on display
    display.value = '0';
    // Reset display font to initial value of 4rem if the display scaled down from having 8 digits
    document.getElementById('display').style.fontSize='4rem';
  } else {
    // otherwise concatenate it to the display
    display.value += clickedButtonValue;
  }
  checkDisplayFontSize();
}

// Get the hamburger menu link icon
const menuButton = document.getElementById('icon').addEventListener('click', menuMessage);

// Message displayed when the hamburger menu icon is clicked  
function menuMessage() {
    // Get the #calculator div 
    let calculatorDiv = document.getElementById('calculator');

    // Get the #display div 
    let displayDiv = document.getElementById('display');

    // Toggle the background color of calc and display divs
    calculatorDiv.classList.toggle('dark-mode');
    displayDiv.classList.toggle('dark-mode');
  }

// Check font size of the display and scale if necessary
function checkDisplayFontSize() {
  // Reduce display font to 2rem if 8 digits are entered and showing in the display
  if (display.value.length >= 8) {
    document.getElementById('display').style.fontSize='2rem';

    // Reduce display font to 1rem if 15 digits are entered and showing in the display
    if(display.value.length >= 15) {
      document.getElementById('display').style.fontSize='1rem';

      // Return font size to 4rem and display 0 if 30 digits are entered and showing in the display(default state)
      if (display.value.length >= 30) {
        document.getElementById('display').style.fontSize='4rem';
        display.value = 0;
      }
    }
  }
}