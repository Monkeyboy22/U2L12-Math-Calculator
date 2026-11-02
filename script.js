function getNumbers() {
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);
    return [num1, num2];
}

function addNumbers() {
    let [num1, num2] = getNumbers();
    let result = num1 + num2;
    document.getElementById("mathResult").innerHTML = "Result: " + result;
}

function subtractNumbers() {
    let [num1, num2] = getNumbers();
    let result = num1 - num2;
    document.getElementById("mathResult").innerHTML = "Result: " + result;
}

function multiplyNumbers() {
    let [num1, num2] = getNumbers();
    let result = num1 * num2;
    document.getElementById("mathResult").innerHTML = "Result: " + result;
}

function divideNumbers() {
    let [num1, num2] = getNumbers();
    let result = num1 / num2;
    document.getElementById("mathResult").innerHTML = "Result: " + result;
}

function roundNumber() {
    let [num1, num2] = getNumbers();
    let result = Math.round(num1);
    document.getElementById("mathResult").innerHTML = "Result: " + result;
}
function squareNumber() {
    let [num1, num2] = getNumbers();
    let result = num1 * num1;
    document.getElementById("mathResult").innerHTML = "Result: " + result;
}
function squareRoot() {
    let [num1, num2] = getNumbers();
    let result = Math.sqrt(num1);
    document.getElementById("mathResult").innerHTML = "Result: " + result;
}

function multiplyPi() {
    let [num1, num2] = getNumbers();
    let result = num1 * Math.PI;
    document.getElementById("mathResult").innerHTML = "Result: " + result;
}

function cubeNumber() {
    let [num1, num2] = getNumbers();
    let result = num1 * num1 * num1;
    document.getElementById("mathResult").innerHTML = "Result: " + result;
}
