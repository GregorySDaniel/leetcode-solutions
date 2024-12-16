var isSubsequence = function(s, t) {
    let s_pointer = 0;
    let t_pointer = 0;

    while (s_pointer < s.length && t_pointer < t.length) {
        if (s[s_pointer] === t[t_pointer]) {
            s_pointer++;
        }
        t_pointer++;
    }

    return s_pointer === s.length;    
};
