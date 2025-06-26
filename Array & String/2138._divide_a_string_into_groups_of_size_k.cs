using System.Text;

public class Solution
{
    public string[] DivideString(string s, int k, char fill)
    {
        int counter = 0;
        int arrIndex = 0;
        int auxInt = s.Length / k;
        int myLength = (s.Length % k) > 0 ? auxInt + 1 : auxInt;

        string[] myArr = new string[myLength];

        while (counter < s.Length)
        {
            StringBuilder myStringBuilder = new StringBuilder("");


            for (int i = 0; i < k; i++)
            {
                if (i + counter < s.Length)
                {
                    myStringBuilder.Append(s[i + counter]);

                }
                else
                {
                    myStringBuilder.Append(fill);
                }

            }
            myArr[arrIndex++] = myStringBuilder.ToString();

            counter += k;

        }

        return myArr;
    }
}