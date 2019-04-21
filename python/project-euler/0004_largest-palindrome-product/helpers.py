def find_largest_palindrome(range_start: int, range_end: int) -> int:

    largest: int = 0
    product: int

    i: int
    for i in range(range_start, range_end):
        j: int
        for j in range(range_start, range_end):
            product = i * j
            if is_palindrome(str(product)) and product > largest:
                largest = product

    return largest


def is_palindrome(input_string: str) -> bool:

    input_length: int = len(input_string)

    direct: int
    index: int
    for index in range(0, input_length):
        direct = input_length - index - 1
        if direct <= index:
            return True
        elif input_string[direct] != input_string[index]:
            return False

    return False
