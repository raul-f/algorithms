import time

from typing import List
from decimal import Decimal

from helpers import *


def main() -> None:
    start: Decimal = Decimal(time.time())
    # start of program
    upper_set_boundary: int = 1000

    lower_set_boundary: int = 100

    print(find_largest_palindrome(lower_set_boundary, upper_set_boundary))
    # end of program
    end: Decimal = Decimal(time.time())
    execution_time: Decimal = round((end - start) * 1000, 3)
    print(
        f'This program took {execution_time} miliseconds ({execution_time / 1000} seconds) to run.'
    )


main()
