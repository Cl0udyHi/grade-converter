const outputElement = document.getElementById("output");

function reset() {
  outputElement.classList.remove("a");
  outputElement.classList.remove("b");
  outputElement.classList.remove("c");
  outputElement.classList.remove("d");
  outputElement.classList.remove("f");
}

function setGrade(input) {
  let output = "F";

  if (input < 0) outputElement.textContent = "e";

  if (input >= 95 && input <= 100) {
    output = "A+";
    reset();
    outputElement.classList.add("a");
  }
  if (input >= 90 && input <= 94) {
    output = "A";
    reset();
    outputElement.classList.add("a");
  }
  if (input >= 85 && input <= 89) {
    output = "B+";
    reset();
    outputElement.classList.add("b");
  }
  if (input >= 80 && input <= 84) {
    output = "B";
    reset();
    outputElement.classList.add("b");
  }
  if (input >= 75 && input <= 79) {
    output = "C+";
    reset();
    outputElement.classList.add("c");
  }
  if (input >= 70 && input <= 74) {
    output = "C";
    reset();
    outputElement.classList.add("c");
  }
  if (input >= 65 && input <= 69) {
    output = "D+";
    reset();
    outputElement.classList.add("d");
  }
  if (input >= 60 && input <= 64) {
    output = "D";
    reset();
    outputElement.classList.add("d");
  }
  if (input < 60) {
    output = "F";
    reset();
    outputElement.classList.add("f");
  }

  outputElement.classList.add("f");

  outputElement.textContent = output;
}

window.onload = function () {
  reset();
  return (outputElement.textContent = "?");
};

document.addEventListener("input", (e) => {
  const input = e.target.value;

  if (!input) {
    reset();
    return (outputElement.textContent = "?");
  }

  if (input < 0 || input > 100) {
    e.target.value = 0;
  }

  setGrade(input);
});
