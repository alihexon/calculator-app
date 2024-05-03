let calculation = localStorage.getItem("storedCalculation") || "0";
const screen = document.querySelector(".screen");

screen.textContent = calculation;

function updateCalculation(value) {
  if (calculation == 0) {
    calculation = value;
  } else {
    calculation += value;
  }

  screen.textContent = calculation;
}

function clearCalculation() {
  calculation = "0";
  screen.textContent = calculation;
  localStorage.setItem("storedCalculation", calculation);
}

function doCalculation() {
  calculation = eval(calculation);
  screen.textContent = calculation;
  localStorage.setItem("storedCalculation", calculation);
}

document.querySelectorAll(".calc-btn").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.innerText === "=" || button.innerText === "C") {
      return;
    }

    const value = button.getAttribute("data-value");
    updateCalculation(value);
  });
});
