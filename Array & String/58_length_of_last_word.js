var lengthOfLastWord = function(s) {
    let last_word_length = 0;

    for(let i = (s.length-1); i >= 0; i--){
        if(s[i]!=" "){
            last_word_length++;
        } else if (last_word_length!=0) {
            return last_word_length;
        }
    }

    return last_word_length;
};