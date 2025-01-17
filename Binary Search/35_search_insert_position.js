var searchInsert = function(nums, target) {
    let rp = nums.length - 1;
    let lp = 0;

    while (lp <= rp) {
        let middle = Math.floor((lp + rp) / 2);
        
        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] > target) {
            rp = middle - 1;
        } else {
            lp = middle + 1;
        }
    }

    return lp;
};
