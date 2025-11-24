function isValidMessage(message, validation) {
    // Step 1: split the message into individual words
    const words = message.split(" ");

    // Step 2: if number of words !== number of validation letters → invalid
    if (words.length !== validation.length) {
        return false;
    }

    // Step 3: Compare each word’s first letter with the validation letter
    for (let i = 0; i < words.length; i++) {
        const wordFirstLetter = words[i][0].toLowerCase();
        const validLetter = validation[i].toLowerCase();

        if (wordFirstLetter !== validLetter) {
            return false;   // Mismatch → invalid message
        }
    }

    // Step 4: All checks passed
    return true;
}

console.log(isValidMessage("Hello World Again", "HWA")); // true
console.log(isValidMessage("Hello World Again", "HWB")); // false
console.log(isValidMessage("JavaScript is Fun", "JIF")); // true
console.log(isValidMessage("JavaScript is Fun", "JFX")); // false