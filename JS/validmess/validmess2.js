function isValidMessage(message, validation) {
    const words = message.split(" ");

    if (words.length !== validation.length) {
        return false;
    }

    for (let i = 0; i < words.length; i++) {
        if (words[i][0].toLowerCase() !== validation[i].toLowerCase()) {
            return false;
        }
    }

    return message; // ✅ return the message instead of true
}

console.log(isValidMessage("Hello World Again", "HWA")); // "Hello World Again"
console.log(isValidMessage("Hello World Again", "HWB")); // false
console.log(isValidMessage("JavaScript is Fun", "JIF")); // "JavaScript is Fun"
console.log(isValidMessage("JavaScript is Fun", "JFX")); // false