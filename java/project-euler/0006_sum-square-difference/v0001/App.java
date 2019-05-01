public class App {
    public static void main(String[] args) {
        long start = System.nanoTime();
        // Start of main code

        double sumSquare = 0, squareSum = 0, upperLimit = 100;

        for (int i = 1; i <= upperLimit; i++) {
            squareSum += Math.pow(i, 2.0);
        }
        sumSquare = Math.pow((Math.pow(upperLimit, 2) + upperLimit) / 2, 2.0);

        System.out.printf("The difference is %,d%n", (long) sumSquare - (long) squareSum);
        // End of main code
        long end = System.nanoTime();
        System.out.printf("The program took %,d nanoseconds (%d miliseconds) to run%n", end - start,
                (end - start) / 1000000);
    }
}