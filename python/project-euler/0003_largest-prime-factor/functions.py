import math

from typing import List


def get_prime_pivots(range_boundary: int) -> List[int]:

    # print(
    #     f'The function get_prime_pivots has received {range_boundary} as input'
    # )

    if range_boundary >= 2:
        factors: List[int] = [2]

        number: int
        for number in range(2, range_boundary + 1):

            factor_count: int = 0

            factor: int
            for factor in factors:
                if number % factor == 0:
                    factor_count += 1
                    break

            if number ** 2 > range_boundary:
                # print(
                #     f'The function get_prime_pivots is about to return {factors}'
                # )
                return factors

            if factor_count < 1:
                factors.append(number)
    else:
        # print(
        #     f'The function get_prime_pivots is about to return {[]}'
        # )
        return []


def get_primes_in_range(number_range: List[int], pivots: List[int]) -> List[int]:
    primes: List[int] = number_range

    # print(
    #     f'The function remove_multiples has received {number_range} and {pivots} as input'
    # )

    pivot: int
    for pivot in pivots:
        primes = remove_multiples(primes, pivot)

    # print(f'The function get_primes_in_range has returned {primes}')
    return primes


def remove_multiples(number_list: List[int], factor: int) -> List[int]:
    result_list: List[int] = []

    # print(
    #     f'The function remove_multiples has received {number_list} and {factor} as input'
    # )

    number: int
    for number in number_list:
        if number % factor != 0 or number == factor:
            result_list.append(number)

    # print(f'The function remove_multiples has returned {result_list}')
    return result_list
