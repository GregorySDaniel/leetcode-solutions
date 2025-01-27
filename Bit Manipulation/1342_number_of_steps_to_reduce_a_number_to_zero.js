var numberOfSteps = function(num) {
    let steps = 0;

    while(num > 0){
        if (num & 1){
            num -= 1;
        } else {
            num >>= 1;
        }
        steps++;
    }    
    return steps;
};