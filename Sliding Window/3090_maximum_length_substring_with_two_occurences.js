var maximumLengthSubstring = function(s) {
    let lp = 0;
    let rp = 0;
    let max = 1;
    let counter = {};

    counter[s[0]] = 1;

    while(rp < s.length - 1){
        rp++;

        if(s[rp] in counter){
            counter[s[rp]]++;
        } else {
            counter[s[rp]] = 1;
        }

        while(counter[s[rp]] === 3) {
            counter[s[lp]]--;
            lp++;
        }
        max = Math.max(max, rp - lp + 1);
    }    

    return max;
};