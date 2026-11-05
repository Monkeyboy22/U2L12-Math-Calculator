// Add numbers and operations to the display
function appendValue(value) {

    document.getElementById("display").value += value;

}


// Clear everything
function clearDisplay() {

    document.getElementById("display").value = "";

    document.getElementById("mathResult").innerHTML = "Result:";

}


// Delete the last character
function deleteLast() {

    let display = document.getElementById("display");

    display.value = display.value.slice(0, -1);

}


// Calculate using eval()
function calculate() {

    let x = document.getElementById("display").value;

    try {

        if (!/^[0-9+\-*/().\s]+$/.test(x)) {
            throw new Error("Invalid");
        }

        let answer = eval(x);

        if (!isFinite(answer)) {
            throw new Error("Invalid");
        }

        document.getElementById("display").value = answer;

        document.getElementById("mathResult").innerHTML =
            "Result: " + answer;

    }

    catch(error) {

        document.getElementById("mathResult").innerHTML =
            "Invalid calculation";

    }

}


// Get the number entered
function getNumber() {

    return parseFloat(document.getElementById("display").value);

}


// Show the answer
function showResult(answer) {

    if (isNaN(answer) || !isFinite(answer)) {

        document.getElementById("mathResult").innerHTML =
            "Invalid number";

    } else {

        document.getElementById("display").value = answer;

        document.getElementById("mathResult").innerHTML =
            "Result: " + answer;

    }

}


// Round a number
function roundNumber() {

    let x = getNumber();

    let answer = Math.round(x);

    showResult(answer);

}


// Square a number
function squareNumber() {

    let x = getNumber();

    let answer = Math.pow(x, 2);

    showResult(answer);

}


// Square root
function squareRoot() {

    let x = getNumber();

    let answer = Math.sqrt(x);

    showResult(answer);

}


// Multiply by Pi
function multiplyPi() {

    let x = getNumber();

    let answer = x * Math.PI;

    showResult(answer);

}


// Power of 3
function cubeNumber() {

    let x = getNumber();

    let answer = Math.pow(x, 3);

    showResult(answer);

}


// Calculate statistics from uploaded file
function calculateStatistics() {

    let text = document.getElementById("fileInput").value;

    let arr = text.split(",");

    let numbers = [];

    for (let i = 0; i < arr.length; i++) {

        let num = Number(arr[i]);

        if (arr[i].trim() !== "" && !isNaN(num)) {

            numbers.push(num);

        }

    }

    if (numbers.length == 0) {

        document.getElementById("statsResult").innerHTML =
            "Please enter some numbers.";

        return;

    }


    // Find the total and mean
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {

        total += numbers[i];

    }

    let mean = total / numbers.length;


    // Sort numbers
    numbers.sort(function(a, b) {

        return a - b;

    });


    // Find median
    let middle = Math.floor(numbers.length / 2);

    let median;

    if (numbers.length % 2 == 0) {

        median = (numbers[middle - 1] + numbers[middle]) / 2;

    } else {

        median = numbers[middle];

    }


    // Find maximum and minimum
    let max = numbers[0];

    let min = numbers[0];

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] > max) {

            max = numbers[i];

        }

        if (numbers[i] < min) {

            min = numbers[i];

        }

    }


    // Find mode
    let mode = numbers[0];

    let highestCount = 0;

    for (let i = 0; i < numbers.length; i++) {

        let count = 0;

        for (let j = 0; j < numbers.length; j++) {

            if (numbers[i] == numbers[j]) {

                count++;

            }

        }

        if (count > highestCount) {

            highestCount = count;

            mode = numbers[i];

        }

    }

    if (highestCount == 1) {

        mode = "No mode";

    }


    // Display results
    document.getElementById("statsResult").innerHTML =

        "Mean: " + mean.toFixed(2) +
        "<br>Median: " + median +
        "<br>Mode: " + mode +
        "<br>Maximum: " + max +
        "<br>Minimum: " + min;

}