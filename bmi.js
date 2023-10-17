function calculateBMI() {
  let weight = Number(document.getElementById("weight").value);
  let height = Number(document.getElementById("height").value);
  let bmi = weight / (height * height);
  let calculateBMI = document.getElementById("result");
  calculateBMI.innerHTML = bmi.toFixed(2);
}
