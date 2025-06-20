public class Solution
{
    public bool CanPlaceFlowers(int[] flowerbed, int n)
    {
        int counter = 1;
        for (int i = 0; i < flowerbed.Length; i++)
        {
            if (flowerbed[i] == 1)
            {
                counter = 0;
            }
            else
            {
                counter++;
            }

            if (counter == 3)
            {
                n--;
                counter = 1;
            }

            if (i == flowerbed.Length - 1 && counter == 2)
            {
                n--;
            }
        }

        return n < 1;
    }
}