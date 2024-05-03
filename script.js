let calculation = localStorage.getItem("storedCalculation") || "0";
const calculationDisplay = document.querySelector(".screen");

calculationDisplay.textContent = calculation;

function updateCalculation(value) {
  calculation += value;
  calculationDisplay.textContent = calculation;
}

function clearCalculation() {
  calculation = "0";
  calculationDisplay.textContent = calculation;
  localStorage.setItem("storedCalculation", calculation);
}

function doCalculation() {
  calculation = eval(calculation);
  calculationDisplay.textContent = calculation;
  localStorage.setItem("storedCalculation", calculation);
}

document.querySelectorAll(".calc-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const value = this.getAttribute("data-value");
    updateCalculation(value);
  });
});
