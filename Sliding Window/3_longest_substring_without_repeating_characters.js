var lengthOfLongestSubstring = function(s) {
    let lp = 0;
    let rp = 0;
    let longest = 0;
    const map = {};

    while(rp < s.length){
        s[rp] in map ? map[s[rp]]++ : map[s[rp]] = 1;;

        while(map[s[rp]] > 1){
            map[s[lp]]--;
            lp++;
        }

        longest = Math.max(longest, rp-lp +1)

        rp++

    }

    return longest;    
};