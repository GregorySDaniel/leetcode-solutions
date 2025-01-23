var mergeTwoLists = function(list1, list2) {
    let new_list = new ListNode();
    let prev_head = new_list;

    while(list1 && list2){
        if(list1.val < list2.val){
            new_list.next = list1;
            list1 = list1.next;
        } else {    
            new_list.next = list2;
            list2 = list2.next;
        }

        new_list = new_list.next;
    }

    new_list.next = list1 || list2;

    return prev_head.next;
};