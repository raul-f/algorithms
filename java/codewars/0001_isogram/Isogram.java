import java.util.Map;
import java.util.HashMap;

public class Isogram {
    public static boolean isIsogram(String str) {
        char[] alphabet = "abcdefghijklmnopqrstuvwxyz".toCharArray();
        Map<String, Integer> charCount = new HashMap<>();

        for (char letter : alphabet) {
            charCount.put(Character.toString(letter), 0);
        }

        String formattedStr = str.toLowerCase();

        char[] strLetters = formattedStr.toCharArray();

        for (char letter : strLetters) {
            // System.out.println(letter);
            int count = charCount.get(Character.toString(letter));
            if (count == 1) {
                return false;
            } else {
                charCount.put(Character.toString(letter), count + 1);
            }
        }

        // System.out.println(charCount);

        return true;
    }
}