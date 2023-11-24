function convertToWords() {
    const numberInput = document.getElementById("numberInput").value;
    const resultElement = document.getElementById("result");

    // Use an improved logic to convert the number to words
    const result = convertNumberToWords(numberInput);

    resultElement.innerText = `Result: ${result}`;
}

// Improved logic to convert number to words
function convertNumberToWords(number) {
    const units = ["", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion"];
    const words = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    // Convert the string input to a number
    let numericValue = parseInt(number, 10);

    // Check if the input is a valid number
    if (isNaN(numericValue)) {
        return "Invalid input";
    }

    // Use the improved logic to convert the number to words
    if (numericValue === 0) {
        return "zero";
    }

    let result = "";
    let index = 0;

    while (numericValue > 0) {
        const threeDigits = numericValue % 1000;
        if (threeDigits !== 0) {
            result = convertThreeDigitsToWords(threeDigits) + " " + units[index] + " " + result;
        }
        numericValue = Math.floor(numericValue / 1000);
        index++;
    }

    return result.trim() || "zero";
}

// Helper function to convert three digits to words
function convertThreeDigitsToWords(num) {
    const words = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    let result = "";

    const hundreds = Math.floor(num / 100);
    if (hundreds > 0) {
        result += words[hundreds] + " hundred ";
    }

    const lastTwoDigits = num % 100;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        result += teens[lastTwoDigits - 11];
    } else {
        result += tens[Math.floor(lastTwoDigits / 10)] + " " + words[lastTwoDigits % 10];
    }

    return result.trim();
}
