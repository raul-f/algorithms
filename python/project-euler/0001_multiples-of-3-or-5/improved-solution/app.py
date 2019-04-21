import time


def main():
    start = time.time()
    counter_3 = 0
    counter_5 = 0
    total_sum = 0
    upper_bound = 10 ** 9
    while (counter_3 < upper_bound):
        if counter_3 % 5 != 0:
            total_sum += counter_3
        counter_3 += 3
    while (counter_5 < upper_bound):
        total_sum += counter_5
        counter_5 += 5
    print(total_sum)
    end = time.time()
    print(f"The program took {end - start} seconds to run")


main()
