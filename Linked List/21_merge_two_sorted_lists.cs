public class Solution
{
    public ListNode MergeTwoLists(ListNode list1, ListNode list2)
    {
        ListNode list3 = new ListNode();
        ListNode aux = list3;

        while (list1 != null && list2 != null)
        {
            if (list1.val < list2.val)
            {
                list3.next = list1;
                list1 = list1.next;
            }
            else
            {
                list3.next = list2;
                list2 = list2.next;

            }

            list3 = list3.next;
        }

        list3.next = list1 == null ? list2 : list1;

        return aux.next;
    }
}