public class Solution
{
    public ListNode MiddleNode(ListNode head)
    {
        ListNode pointer = head;

        while (pointer != null && pointer.next != null)
        {
            head = head.next;
            pointer = pointer.next.next;
        }

        return head;
    }
}