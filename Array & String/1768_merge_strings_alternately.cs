public class Solution
{
    public string MergeAlternately(string word1, string word2)
    {
        int minStringLength = word1.Length < word2.Length ? word1.Length : word2.Length;
        string biggestString = word1.Length > word2.Length ? word1 : word2;
        int charArrayLength = word1.Length + word2.Length;
        char[] mergedCharArray = new char[charArrayLength];
        int charArrayIndex = 0;

        for (int i = 0; i < minStringLength; i++)
        {
            mergedCharArray[charArrayIndex++] = word1[i];
            mergedCharArray[charArrayIndex++] = word2[i];
        }

        for (int i = minStringLength; i < biggestString.Length; i++)
        {
            mergedCharArray[charArrayIndex++] = biggestString[i];
        }

        return new string(mergedCharArray);

    }
}