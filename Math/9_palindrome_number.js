var isPalindrome = function(x) {
    if(x < 0) return false;
    x = x.toString();

    let left_pointer = 0;
    let right_pointer = x.length - 1;

    while(right_pointer>left_pointer){
        if(x[left_pointer++]!==x[right_pointer--]){
            return false;
        }
    }

    return true;
}