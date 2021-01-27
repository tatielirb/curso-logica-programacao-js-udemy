var n1 = "0";
var n2 = "";
var operation = null;

function includeDigit(digito) {
  if (n2 && operation && clikeInEqual) {
    clikeInEqual == false;
    clearDigit();
    n1 = digito;
    showInDisplay(n1);
    return;
  }

  if (operation !== null) {
    n2 = n2 + digito;
    showInDisplay(n2);
  } else {
    if (n1 === "0") {
      n1 = digito;
    } else {
      n1 = n1 + digito;
    }
    showInDisplay(n1);
  }
}

function calculate() {
  var nCalculated = 0;
  var _n1 = parseFloat(n1);
  var _n2 = parseFloat(n2);
  switch (operation) {
    case "+":
      nCalculated = _n1 + _n2;
      break;
    case "-":
      nCalculated = _n1 - _n2;
      break;
    case "/":
      nCalculated = _n1 / _n2;
      break;
    case "*":
      nCalculated = _n1 * _n2;
      break;
  }
  return nCalculated;
}

function starCalculation(simbolo) {
  if (clikeInEqual) {
    clikeInEqual = false;
    n2 = "";
  }
  if (operation === null || n2 === "") {
    operation = simbolo;
  } else {
    var result = calculate();
    n1 = result;
    operation = simbolo;
    n2 = "";
    showInDisplay(n1);
  }
}

function showInDisplay(valor) {
  document.querySelector("#display").innerHTML = valor;
}

var clikeInEqual = false;
function finalizeCalculation() {
  clikeInEqual = true;
  var result = calculate();
  n1 = result;
  showInDisplay(n1);
}

function includePoint() {
  if (operation && n2 === "") {
    n2 = "0.";
  } else if (operation && n2) {
    n2 = n2 + ".";
  } else {
    n1 = n1 + ".";
  }
}

function clearDigit() {
  n1 = "0";
  operation = null;
  n2 = "";
  showInDisplay(n1);
  console.log("ta clicando", n1, operation, n2);
}

function obterPorcento() {
  if (!n2) {
    limpar();
    mostrarNoDisplay(n1);
  } else {
    if (operacao === "+" || operacao === "-") {
      var porcento = (n1 * n2) / 100;
    } else {
      var porcento = n2 / 100;
    }
    n2 = porcento;
    mostrarNoDisplay(n2);
  }
}
