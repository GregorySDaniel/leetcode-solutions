var reverseList = function(head) {
    let next_node = null;
    let prev_node = null;

    while(head !== null){
        next_node = head.next;
        head.next = prev_node;
        prev_node = head;
        head = next_node;
    }    

    return prev_node;
};
