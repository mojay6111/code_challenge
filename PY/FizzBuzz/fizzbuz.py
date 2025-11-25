from typing import List, Union

def fizz_buzz(n: int) -> List[Union[int, str]]:
    """
    Return a list of values from 1..n replacing:
      - multiples of 3 with "Fizz"
      - multiples of 5 with "Buzz"
      - multiples of both 3 and 5 with "FizzBuzz"

    Args:
        n: The upper bound (inclusive). Expected to be an integer.

    Returns:
        A list containing integers and strings ("Fizz", "Buzz", "FizzBuzz").
    """
    # input validation (defensive)
    if not isinstance(n, int):
        raise TypeError("n must be an integer")
    if n <= 0:
        return []   # choose to return an empty list for n <= 0

    result: List[Union[int, str]] = []

    for i in range(1, n + 1):
        # check combined case first: divisible by both 3 and 5 -> divisible by 15
        if i % 15 == 0:
            result.append("FizzBuzz")
        elif i % 3 == 0:           # divisible by 3 only
            result.append("Fizz")
        elif i % 5 == 0:           # divisible by 5 only
            result.append("Buzz")
        else:
            result.append(i)        # not divisible by 3 or 5

    return result


print(fizz_buzz(15))

# [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]