public class Solution
{
    public int LongestOnes(int[] nums, int k)
    {
        int rp = 0;
        int lp = 0;
        int zeroCounter = 0;
        int max = 0;

        while (rp < nums.Length)
        {
            if (nums[rp] == 0)
            {
                zeroCounter++;

            }

            if (zeroCounter > k)
            {
                if (nums[lp] == 0)
                {
                    zeroCounter--;
                }
                lp++;
                rp++;
            }
            else
            {
                if (rp - lp + 1 > max)
                {
                    max = rp - lp + 1;

                }

                rp++;
            }

        }

        return max;

    }
}