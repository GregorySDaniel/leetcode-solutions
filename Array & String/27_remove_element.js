var removeElement = function(nums, val) {
    let array_size = nums.length;
    let counter = 0;

    for(let i=0;i<array_size;i++){
        if(nums[i]!==val){
            nums[counter] = nums[i];
            counter++;
        }
    }

    return counter;
};