var minSubArrayLen = function(target, nums) {
    let lp = 0;
    let rp = 0;
    let sum = 0;
    let min = Infinity;

    while(rp < nums.length){
        sum += nums[rp];

        while(sum >= target){
            min = Math.min(min, rp-lp + 1);
            sum -= nums[lp];
            lp++;
        }

        rp++;
    }

    return min !== Infinity ? min : 0;

};