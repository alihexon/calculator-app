let calculation = localStorage.getItem("storedCalculation") || "0";
const calculationDisplay = document.querySelector(".screen");

calculationDisplay.innerHTML = calculation;

function updateCalculation(value) {
  calculation += value;
  calculationDisplay.innerHTML = calculation;
}

function clearCalculation() {
  calculation = "0";
  calculationDisplay.innerHTML = calculation;
  localStorage.setItem("storedCalculation", calculation);
}

function doCalculation() {
  calculation = eval(calculation);
  calculationDisplay.innerHTML = calculation;
  localStorage.setItem("storedCalculation", calculation);
}
