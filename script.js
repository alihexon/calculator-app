let calculation = localStorage.getItem("storedCalculation") || "";
const calculationDisplay = document.querySelector(".screen");

if (calculation === localStorage.getItem("storedCalculation")) {
  calculationDisplay.innerHTML = calculation;
}

function updateCalculation(value) {
  calculation += value;
  calculationDisplay.innerHTML = calculation;
  localStorage.setItem("storedCalculation", calculation);
}

function clearCalculation() {
  calculation = "";
  calculationDisplay.innerHTML = calculation;
  localStorage.setItem("storedCalculation", calculation);
}

function doCalculation() {
  calculation = eval(calculation);
  calculationDisplay.innerHTML = calculation;
}
