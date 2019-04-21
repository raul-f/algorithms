import time
from typing import List


def main() -> None:
    start: float = time.time()
    fibonacci_array: List[int] = [0, 1]
    upper_bound: int = 4 * 10 ** 6
    total_sum: int = 0
    while fibonacci_array[-1] + fibonacci_array[-2] < upper_bound:
        fibonacci_array.append(fibonacci_array[-1] + fibonacci_array[-2])
    for fibonacci_number in fibonacci_array:
        if fibonacci_number % 2 == 0:
            total_sum += fibonacci_number
    print(total_sum)
    print(len(fibonacci_array))
    end: float = time.time()
    print(f"The program took {end - start} seconds to run")


main()
