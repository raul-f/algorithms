public class Clerk {
    public static String tickets(int[] peopleInLine) {
        int[] billAmounts = { 0, 0, 0 };
        // [0] stands for 25, [1] stands for 50, [2] stands for 100
        for (int bill : peopleInLine) {
            switch (bill) {
            case 25:
                billAmounts[0]++;
                break;
            case 50:
                if (billAmounts[0] >= 1) {
                    billAmounts[0]--;
                    billAmounts[1]++;
                } else {
                    return "NO";
                }
                break;
            case 100:
                if (billAmounts[0] >= 1 && billAmounts[1] >= 1) {
                    billAmounts[0]--;
                    billAmounts[1]--;
                    billAmounts[2]++;
                } else if (billAmounts[0] >= 3) {
                    billAmounts[0] -= 3;
                    billAmounts[2]++;
                } else {
                    return "NO";
                }
                break;
            }
        }
        return "YES";
    }
}