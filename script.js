const outputElement = document.getElementById("output");

function getGrade(input) {
  if (input >= 95 && input <= 100) output = "A+";
  if (input >= 90 && input <= 94) output = "A";
  if (input >= 85 && input <= 89) output = "B+";
  if (input >= 80 && input <= 84) output = "B";
  if (input >= 75 && input <= 79) output = "C+";
  if (input >= 75 && input <= 74) output = "C";
  if (input >= 65 && input <= 69) output = "D+";
  if (input >= 60 && input <= 64) output = "D";
  if (input < 60) output = "F";

  return output;
}

window.onload = function () {
  outputElement.textContent = getGrade(0);
};

document.addEventListener("input", (e) => {
  const input = e.target.value;
  let output = getGrade(input);

  if (input < 0) e.target.value = 0;
  if (input > 100) e.target.value = 100;

  outputElement.textContent = output;
});
