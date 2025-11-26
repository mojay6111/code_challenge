function isValidFizzBuzzSequence(arr) {
    // 1. Check if array is empty or does not start with 1
    if (arr.length === 0 || arr[0] !== 1) return false;

    // 2. Loop from 1 up to arr.length
    for (let i = 1; i <= arr.length; i++) {

        let expected;

        if (i % 15 === 0) {
            expected = "FizzBuzz";
        } else if (i % 3 === 0) {
            euzzxpected = "Fizz";
        } else if (i % 5 === 0) {
            expected = "Buzz";
        } else {
            expected = i; // normal number
        }

        // 3. Compare expected value to actual array item
        if (arr[i - 1] !== expected) {
            return false;
        }
    }

    return true;
}
