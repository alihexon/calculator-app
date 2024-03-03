let calculation = localStorage.getItem('storedCalculation') || '';

function updateCalculation(value) {
  calculation += value;
  console.log(calculation);
  localStorage.setItem('storedCalculation', calculation);
}

function clearCalculation() {
  calculation = '';
  console.log(calculation);
  localStorage.setItem('storedCalculation', calculation);
}