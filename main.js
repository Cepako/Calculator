const result = document.querySelector('.result');
const lastOperation = document.querySelector('.last-operation');

const previousNumber = document.querySelector('.previousNumber');
const currentNumber = document.querySelector('.currentNumber');
const mathSign = document.querySelector('.mathSign');

const clearButton = document.querySelector('.clear');
const deleteLastButton = document.querySelector('.deleteLast');
const operationButtons = [...document.querySelectorAll('.operation')];
const equalButton = document.querySelector('.equal');
const numberButtons = [...document.querySelectorAll('.number')];

let previousNumberValue = '';
let currentNumberValue = '';
let mathSignValue = '';

function clear() {
  previousNumber.textContent = '';
  currentNumber.textContent = '';
  mathSign.textContent = '';
  lastOperation.textContent = '';
  previousNumberValue = '';
  currentNumberValue = '';
  mathSignValue = '';
}

function deleteLastNumber() {}
function operation(button) {
  if (previousNumberValue === '') {
    previousNumberValue = 0;
    previousNumber.textContent = previousNumberValue;
  }
  if (mathSign.textContent === '') {
    mathSignValue = button.textContent;
    mathSign.textContent = button.textContent;
  }
  lastOperation.textContent =
    previousNumberValue + mathSignValue + currentNumberValue;
}
function equal() {}

function addNumber(button) {
  if (
    mathSignValue === '' &&
    !previousNumberValue.includes('.') &&
    button.textContent === '.'
  ) {
    if (previousNumber.textContent === '') {
      previousNumberValue += 0 + button.textContent;
    } else {
      previousNumberValue += button.textContent;
    }
  } else if (
    mathSignValue !== '' &&
    !currentNumberValue.includes('.') &&
    button.textContent === '.'
  ) {
    if (currentNumber.textContent === '') {
      currentNumberValue += 0 + button.textContent;
    } else {
      currentNumberValue += button.textContent;
    }
  }
  if (mathSignValue === '' && button.textContent !== '.') {
    if (button.textContent === '0') {
      if (previousNumberValue[0] === '0' && !previousNumberValue.includes('.'))
        previousNumberValue += '.' + button.textContent;
      else previousNumberValue += button.textContent;
    } else previousNumberValue += button.textContent;
  } else if (mathSignValue !== '' && button.textContent !== '.') {
    if (button.textContent === '0') {
      if (currentNumberValue[0] === '0' && !currentNumberValue.includes('.'))
        currentNumberValue += '.' + button.textContent;
      else currentNumberValue += button.textContent;
    } else currentNumberValue += button.textContent;
  }
  previousNumber.textContent = previousNumberValue;
  currentNumber.textContent = currentNumberValue;
  lastOperation.textContent =
    previousNumberValue + mathSignValue + currentNumberValue;
}

clearButton.addEventListener('click', clear);
deleteLastButton.addEventListener('click', deleteLastNumber);
operationButtons.forEach((button) => {
  button.addEventListener('click', operation.bind(null, button));
});
equalButton.addEventListener('click', equal);
numberButtons.forEach((button) => {
  button.addEventListener('click', addNumber.bind(null, button));
});
