var longestCommonPrefix = function(strs) {
    let pref = strs[0];
    let pref_size = pref.length;

    for (let i = 1; i < strs.length; i++) {
        let s = strs[i];
        while (pref !== s.substring(0, pref_size)) {
            pref_size--;
            if (pref_size === 0) {
                return "";
            }
            pref = pref.substring(0, pref_size);
        }
    }

    return pref;    
};