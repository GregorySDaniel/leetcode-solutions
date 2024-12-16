var isPalindrome = function(s) {
    const str = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

    let left_pointer = 0;
    let right_pointer = str.length-1;

    while(left_pointer<right_pointer){
        if(str[left_pointer]!==str[right_pointer]){
            return false;
        }
        left_pointer++;
        right_pointer--;
    }

    return true;
};