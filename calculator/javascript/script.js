let display = document.getElementById("display");
let firstNumber = "";
let secondNumber = "";
let operator = "";
let isSecond = false;

function appendNumber(num) {
  if (!isSecond) {
    firstNumber += num;
    display.value = firstNumber;
  } else {
    secondNumber += num;
    display.value = firstNumber + " " + operator + " " + secondNumber;
  }
}

function appendDot() {
  if (!isSecond) {
    if (!firstNumber.includes(".")) {
      firstNumber += ".";
      display.value = firstNumber;
    }
  } else {
    if (!secondNumber.includes(".")) {
      secondNumber += ".";
      display.value = firstNumber + " " + operator + " " + secondNumber;
    }
  }
}

function setOperator(op) {
  if (firstNumber === "") return;
  operator = op;
  isSecond = true;
  display.value = firstNumber + " " + operator;
}

function clearDisplay() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  isSecond = false;
  display.value = "";
}

function deleteChar() {
  if (!isSecond) {
    firstNumber = firstNumber.slice(0, -1);
    display.value = firstNumber;
  } else if (secondNumber !== "") {
    secondNumber = secondNumber.slice(0, -1);
    display.value = firstNumber + " " + operator + " " + secondNumber;
  } else {
    operator = "";
    isSecond = false;
    display.value = firstNumber;
  }
}

function calculate() {
  let num1 = parseFloat(firstNumber);
  let num2 = parseFloat(secondNumber);
  let result = 0;

  switch (operator) {
    case "+": result = num1 + num2; break;
    case "-": result = num1 - num2; break;
    case "*": result = num1 * num2; break;
    case "/": result = num2 !== 0 ? num1 / num2 : "Error"; break;
    case "%": result = num1 % num2; break;
    default: result = num1;
  }

  display.value = result;
  firstNumber = result.toString();
  secondNumber = "";
  operator = "";
  isSecond = false;
}