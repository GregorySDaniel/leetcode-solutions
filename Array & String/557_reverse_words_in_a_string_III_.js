var reverseWords = function(s) {
    let words = s.split(' ');
    let res = [];

    for(word of words){
        res.push(word.split('').reverse().join(''));
    }

    return res.join(' ');
};