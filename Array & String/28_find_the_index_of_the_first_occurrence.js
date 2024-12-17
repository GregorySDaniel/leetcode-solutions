var strStr = function(haystack, needle) {
    let haystack_pointer = 0;
    let needle_pointer = 0;

    while(haystack_pointer<haystack.length){
        if(needle[needle_pointer]==haystack[haystack_pointer]){
            needle_pointer++;
            haystack_pointer++;

            if(needle_pointer==needle.length){
                return haystack_pointer-needle_pointer;
            }
        } else if (needle[needle_pointer]!==haystack[haystack_pointer] && needle_pointer!==0){
            haystack_pointer = haystack_pointer-needle_pointer+1;
            needle_pointer = 0;
        } else {
            haystack_pointer++;
            needle_pointer = 0;
        }
    }
    return -1;
};