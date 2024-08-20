let buttons = document.querySelectorAll(".button");
let string = "";
let operators = ["+", "-", "*", "/", "%", ".", "="];
let history = JSON.parse(localStorage.getItem('historyArray')) || [];


Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerHTML;

    if (value === "=") {
      // Check for incomplete expression
      if (operators.includes(string[string.length - 1]) && string[string.length - 1] !== "=") {
        alert("Incomplete expression. Please complete the expression before evaluating.");
      } else {
        try {
          // Evaluate the expression and convert it back to a string
          const result = eval(string).toFixed(4);
          history.push(`${string} = ${result}`);
          localStorage.setItem('historyArray', JSON.stringify(history));
          string = result.toString();
          document.querySelector("input").value = string;
          updateHistory();
        } catch (error) {
          alert("Syntax Error");
          string = ""; // Clear the string on error
          document.querySelector("input").value = string;
        }
      }
    } else if (value === "C") {
      string = "";
      document.querySelector("input").value = string;
    } else if (value === "Del") {
      string = string.slice(0, -1);
      document.querySelector("input").value = string;
    } else if (
      value === "0" &&
      document.querySelector("input").value === "0"
    ) {
      string = "0";
      document.querySelector("input").value = string;
    } else if (
      operators.includes(value) &&
      operators.includes(string[string.length - 1])
    ) {
      alert("Syntax Error");
      document.querySelector("input").value = string;
    } else if (value === ".") {
      if (string === "") {
        string = "0.";
      } else {
        let lastSegment = string.split(/[+\-*/%]/).pop();
        if (!lastSegment.includes(".")) {
          string += ".";
        }
      }
      document.querySelector("input").value = string;
    } else {
      string += value;
      document.querySelector("input").value = string;
    }
  });
});

function updateHistory() {
  let historyDiv = document.querySelector(".history");
  historyDiv.innerHTML = history.map(entry => `<div class="history-entry"> ${entry}</div>`).join('');
}


// Add event listener for the reset button
document.querySelector(".reset").addEventListener("click", () => {
  localStorage.removeItem('historyArray');
  history = [];
  updateHistory();
});