import time
import math

from typing import List

from functions import get_prime_pivots, get_primes_in_range


def main() -> None:
    start: float = time.time()
    # Main code

    # int(input("What is the number? "))  # 600851475143
    target_num: int = 600851475143

    target_factors: List[int] = get_factors(target_num)

    prime_pivots: List[int] = get_prime_pivots(target_num)

    prime_factors = get_primes_in_range(target_factors, prime_pivots)

    if len(prime_factors) > 0:
        print(
            f'The greatest prime factor is {prime_factors[-1]};\nthe list of prime factors is {prime_factors};\nand the list of factors is {target_factors}.'
        )
    else:
        print('The number provided is prime')

    # End of main code
    end: float = time.time()
    print(f'This program took {end - start} seconds to run.')


def get_factors(target: int) -> List[int]:

    # print(f'The function get_factors has received {target} as input')

    factors: List[int] = []

    for number in range(1, target + 1):
        if target % number == 0:
            factors.append(number)
            continue
        for factor in factors:
            if number * factor > target:
                # print(f'The function get_factors is about to return {factors}')
                return factors

    # print(f'The function get_factors is about to return {factors}')

    return factors


main()
