var history_list = document.querySelector(".history-list");
var calcul = document.querySelector(".calcul");
var result = document.querySelector(".result");
var equal = document.querySelector(".equal");

var expression = "";

equal.addEventListener("click", () => {
  calculate(expression);
});

function appendPercent() {
  if (appendOperator("/", update=false)) {
    appendNumber("100", update=false);
    appendOperator("*", update=false);    
    updateOutput()
  }
}

function appendNumber(num, update=true) {
    expression += num;
    if (update) {
        updateOutput();
    }
}

function appendOperator(op, update=true) {
  if (expression[expression.length - 1] != " ") {
    expression += ' ' + op + ' ';
    if (update) {
      updateOutput();
  }
    return true
  }
  else {
    return false
  }
}

function clearOutput() {
  expression = '';
  updateOutput();
}

function deleteLast() {
  expression = expression.slice(0, -1);
  updateOutput();
}

function calculate(expr) {
  try {
    const calculated = eval(expr);
    expression = calculated.toString();
    updateOutput();
  } catch (error) {
    if (expression[expression.length - 1] == " ") {
      calculate(expr.slice(0, -3))
    }
    else {
      result.innerText = "Error";
    }
  }
}

function updateOutput() {
  if (expression != "") {
    result.innerText = expression;
  }
  else {
    result.innerText = "0";
  }
}