const form = document.getElementById("calculator");

form.addEventListener("submit", event => {
  event.preventDefault();
  const left = parseInt(document.getElementById("left").value);
  const operator = document.getElementById("operator").value;
  const right = parseInt(document.getElementById("right").value);
  let result;

  if (isNaN(left) || isNaN(right)) {
    alert("Error :(");
    console.error("Error :(");
    return;
  }

  switch (operator) {
    case "+":
      result = left + right;
      break;
    case "-":
      result = left - right;
      break;
    case "*":
      result = left * right;
      break;
    case "/":
      if (right === 0) {
        alert("It's over 9000!");
        console.error("It's over 9000!");
        return;
      }
      result = left / right;
      break;
    case "%":
      if (right === 0) {
        alert("It's over 9000!");
        console.error("It's over 9000!");
        return;
      }
      result = left % right;
      break;
    default:
      break;
  }

  alert(`The result is: ${result}`);
  console.log(`The result is: ${result}`);
});

setInterval(() => {
  alert("Please, use me...");
}, 30000);
