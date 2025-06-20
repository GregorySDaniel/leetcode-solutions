public class Solution
{
    bool isVowel(char s)
    {
        return (s == 'a' || s == 'A' || s == 'e' || s == 'E' || s == 'i' || s == 'I' || s == 'o' || s == 'O' || s == 'u' || s == 'U');

    }
    public string ReverseVowels(string s)
    {
        char[] vowels = new char[s.Length];
        char[] newString = new char[s.Length];
        int vowelsIndex = 0;

        for (int i = 0; i < s.Length; i++)
        {
            if (isVowel(s[i]))
            {
                vowels[vowelsIndex++] = s[i];
            }

        }

        vowelsIndex = 0;

        for (int i = s.Length - 1; i >= 0; i--)
        {
            if (isVowel(s[i]))
            {
                newString[i] = vowels[vowelsIndex++];
            }
            else
            {
                newString[i] = s[i];
            }
        }

        return new string(newString);

    }
}