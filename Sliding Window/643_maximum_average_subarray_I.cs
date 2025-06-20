public class Solution
{
    public double FindMaxAverage(int[] nums, int k)
    {
        double sum = 0;
        double result = 0;

        for (int i = 0; i < k; i++)
        {
            result += nums[i];
        }

        sum = result;


        for (int i = k; i < nums.Length; i++)
        {
            sum -= nums[i - k];
            sum += nums[i];

            if (sum > result)
            {
                result = sum;
            }

        }

        return result / k;

    }
}