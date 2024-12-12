var removeDuplicates = function(nums) {
    let array_size = nums.length; 
    let offset = 1;

    for (let i=1;i<array_size;i++) {
        if (nums[i] !== nums[offset-1]) {
            nums[offset] = nums[i];
            offset++;
        }
    }

    return offset;    
};