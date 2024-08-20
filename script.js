let buttons = document.querySelectorAll(".button");
let string = "";

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
      (e.target.innerHTML == "+" ||
        e.target.innerHTML == "-" ||
        e.target.innerHTML == "*" ||
        e.target.innerHTML == "/" ||
        e.target.innerHTML == "%" ||
        e.target.innerHTML == "=" ||
        e.target.innerHTML == ".") &&
      (string[string.length - 1] == "+" ||
        string[string.length - 1] == "-" ||
        string[string.length - 1] == "*" ||
        string[string.length - 1] == "/" ||
        string[string.length - 1] == "%" ||
        string[string.length - 1] == ".")
    ) {
      alert("Syntex Error");
      document.querySelector("input").value = string;
    }else if (
      e.target.innerHTML == "." &&
      string.split(/[+\-*/%]/).pop().includes(".")
    ) {
      alert("Syntax Error: More than one dot in the number");
      document.querySelector("input").value = string;
    }
     else {
      string += e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});


