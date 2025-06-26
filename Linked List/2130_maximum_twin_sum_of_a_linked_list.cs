public class Solution
{
    public int PairSum(ListNode head)
    {
        Stack<int> stack = new Stack<int>();
        ListNode fastNode = head;
        int maxSum = 0;

        while (head != null)
        {
            if (fastNode != null && fastNode.next != null)
            {
                stack.Push(head.val);
                fastNode = fastNode.next.next;
            }
            else
            {
                if (head.val + stack.Peek() > maxSum)
                {
                    maxSum = head.val + stack.Peek();
                }
                stack.Pop();
            }

            head = head.next;

        }
        return maxSum;
    }

}