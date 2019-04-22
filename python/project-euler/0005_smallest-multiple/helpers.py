from typing import List


#########################
#
# Prime-related functions
#
#########################


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


def get_pivots(upper_boundary: int) -> List[int]:
    pivots: List[int] = []

    for number in range(2, upper_boundary):
        if number ** 2 > upper_boundary:
            return pivots
        elif len(get_factors(number)) == 0:
            pivots.append(number)


def remove_multiples_of(factor: int, number_set: List[int]) -> List[int]:
    output_set: List[int] = []

    for number in number_set:
        if number % factor != 0 or number == factor:
            output_set.append(number)

    return output_set


def get_primes_lesser_than(upper_boundary: int) -> List[int]:
    primes: List[int] = list(range(2, upper_boundary))

    pivots = get_pivots(upper_boundary)

    # print(pivots)

    pivot: int
    for pivot in pivots:
        primes = remove_multiples_of(pivot, primes)

    return primes

#########################
#
# Factorization functions
#
#########################


def get_maximum_exponents(primes: List[int], upper_limit: int) -> List[List[int]]:
    exponents: List[List[int]] = []

    exponent: int = 1

    prime: int
    for prime in primes:
        while prime ** exponent <= upper_limit:
            exponent += 1
        exponents.append([prime, exponent - 1])
        exponent = 1
    return exponents


def get_number_from_factorization(factorization: List[List[int]]) -> int:
    composite: int = 1

    for [factor, exponent] in factorization:
        composite *= factor ** exponent

    return composite
