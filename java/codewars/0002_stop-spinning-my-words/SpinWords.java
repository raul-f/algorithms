public class SpinWords {

    public static String spinWords(String sentence) {
        String[] words = sentence.split(" ");
        for (int i = 0; i < words.length; i++) {
            if (words[i].length() >= 5) {
                String reversedWord = "";
                char[] characters = words[i].toCharArray();
                for (int j = characters.length - 1; j >= 0; j--) {
                    reversedWord += characters[j];
                }
                words[i] = reversedWord;
            }
        }
        ;
        String result = String.join(" ", words);
        return result;
    }
}