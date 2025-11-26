def is_valid_fizzbuzz_sequence(arr):
    # 1. Check if array is empty or does not begin with 1
    if len(arr) == 0 or arr[0] != 1:
        return False

    # 2. Loop through expected numbers from 1 to len(arr)
    for i in range(1, len(arr) + 1):

        # 3. Determine what the correct FizzBuzz value should be
        if i % 15 == 0:
            expected = "FizzBuzz"
        elif i % 3 == 0:
            expected = "Fizz"
        elif i % 5 == 0:
            expected = "Buzz"
        else:
            expected = i

        # 4. Compare expected value with the actual array item
        if arr[i - 1] != expected:
            return False

    return True

# Example usage:
print(is_valid_fizzbuzz_sequence([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]))