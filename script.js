let buttons = document.querySelectorAll(".button");
let string = "";
let operators = ["+", "-", "*", "/", "%", ".", "="];

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "Del") {
      string = string.slice(0, string.length - 1);

      console.log(string);

      document.querySelector("input").value = string;
    } else if (
      e.target.innerHTML == "0" &&
      document.querySelector("input").value == "0"
    ) {
      string = 0;
      document.querySelector("input").value = string;
    } else if (
      operators.includes(e.target.innerHTML) &&
      operators.includes(string[string.length - 1])
    ) {
      alert("Syntax Error");
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML === ".") {
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
      string += e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
