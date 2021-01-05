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
    document.getElementById('display').style.fontSize="4rem";
  } else {
    // otherwise concatenate it to the display
    display.value += clickedButtonValue;
  }

  if (display.value.length >= 8) {
    document.getElementById('display').style.fontSize="2rem";
  }
}

// Get the hamburger menu link icon
const menuButton = document.getElementById('icon').addEventListener('click', menuMessage);

// Message displayed when the hamburger menu icon is clicked  
function menuMessage() {
    display.value = 'Crashed..';
  }

