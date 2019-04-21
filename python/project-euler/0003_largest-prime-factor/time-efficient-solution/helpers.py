from typing import List


def get_factors(input_num: int) -> List[int]:
    factors: List[int] = []

    if input_num >= 2:

        number: int
        for number in range(2, input_num):
            if number in factors:
                return sorted(factors)
            if input_num % number == 0:
                factors.extend([number, int(input_num / number)])

        return sorted(factors)
    else:
        return []


def get_primes(number_set: List[int]) -> List[int]:
    primes: List[int] = []

    for element in number_set:
        if len(get_factors(element)) == 0:
            primes.append(element)
    return primes
