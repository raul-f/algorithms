import time

from typing import List

from helpers import *


def main() -> None:
    start: float = time.time()
    # start of program
    input_num: int = 600851475143

    num_factors: List[int] = get_factors(input_num)

    print(num_factors)

    prime_factors: List[int] = get_primes(num_factors)

    print(prime_factors)
    # end of program
    end: float = time.time()
    print(f'The program took {end - start} seconds to run.')


main()
