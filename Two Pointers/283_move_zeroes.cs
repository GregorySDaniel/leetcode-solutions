public class Solution
{
    public void MoveZeroes(int[] nums)
    {
        int iteratingPointer = 0;
        int nonZeroPointer = 0;

        while (iteratingPointer < nums.Length)
        {
            if (nums[iteratingPointer] != 0)
            {
                nums[nonZeroPointer] = nums[iteratingPointer];
                nonZeroPointer++;
            }

            iteratingPointer++;
        }

        for(int i=0;i<nums.Length;i++){
            if(i >= nonZeroPointer){
                nums[i] = 0;
            }
        }
    }
}