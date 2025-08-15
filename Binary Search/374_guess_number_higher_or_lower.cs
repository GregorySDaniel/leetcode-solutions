/** 
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * int guess(int num);
 */

public class Solution : GuessGame
{
    public int GuessNumber(int n)
    {
        int min = 1;
        int max = n;

        while (max >= min)
        {
            int middle = min + (max - min) / 2;
            int res = guess(middle);

            if (res == 0) return middle;

            if (res == 1)
            {
                min = middle + 1;
            }

            if (res == -1)
            {
                max = middle - 1;
            }
        }

        return -1;

    }
}