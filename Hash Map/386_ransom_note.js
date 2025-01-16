var canConstruct = function(ransomNote, magazine) {
    const hash = {};

    for(let element of magazine){
        if(element in hash) {
            hash[element]++;
        } else {
            hash[element] = 1;
        }
    }


    for(let element of ransomNote){
        if(element in hash){
            if(hash[element]==0){
                return false;
            }
            hash[element]--;
        } else {
            return false;
        }
    }
    return true;

};