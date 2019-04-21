import time


def main():
    start = time.time()
    counter = 0
    total_sum = 0
    upper_bound = 10 ** 9
    while (counter < upper_bound):
        if counter % 3 == 0 or counter % 5 == 0:
            total_sum += counter
        counter += 1
    print(total_sum)
    end = time.time()
    print(f"The program took {end - start} seconds to run")


main()
