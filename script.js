function handleSubmit(event) {
  event.preventDefault();
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const result = document.getElementById("result");
  const category = document.getElementById("category");
  const bmi = calculateBMI(weight, height);
  result.textContent = `${bmi}`;
  category.textContent = `${getCategoryBMI(bmi)}`;
}

function calculateBMI(weight, height) {
  return Math.floor(weight / (height / 100) ** 2, 2);
}
function getCategoryBMI(value) {
  if (value <= 18.5) {
    return "Underweight";
  } else if (18.5 < value && value < 25) {
    return "Normal";
  } else if (25 <= value < 30) {
    return "Overweight";
  }
  return "Obesity";
}

document
  .getElementsByTagName("form")[0]
  .addEventListener("submit", handleSubmit);
