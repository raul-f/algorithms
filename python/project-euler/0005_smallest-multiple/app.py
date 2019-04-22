import time

from typing import List
from decimal import Decimal

from helpers import get_primes_lesser_than, get_maximum_exponents, get_number_from_factorization


def main() -> None:
    start: Decimal = Decimal(time.time())
    # start of program
    key_number: int = 20

    primes: List[int] = get_primes_lesser_than(key_number)

    factorization: List[List[int]] = get_maximum_exponents(primes, key_number)

    final_output: int = get_number_from_factorization(factorization)

    print(final_output)
    # end of program
    end: Decimal = Decimal(time.time())
    execution_duration = round((end - start) * 1000, 3)
    print(
        f'The program took {execution_duration} miliseconds ({execution_duration / 1000} seconds) to run.'
    )


main()
