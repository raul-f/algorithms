import time


from decimal import Decimal


def main() -> None:
    start: Decimal = Decimal(time.time())
    # Main code

    # End of main code
    end: Decimal = Decimal(time.time())
    execution_time: Decimal = round((end - start) * 1000, 3)
    print(
        f'This program took {execution_time} miliseconds ({execution_time / 1000} seconds) to run.'
    )


main()
