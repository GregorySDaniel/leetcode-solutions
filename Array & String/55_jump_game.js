var canJump = function(nums) {
    let max_jump = nums[0];

    if(nums.length<=1){
        return true;
    }

    for(let i=1;i<nums.length;i++){

        if(max_jump <= 0) {
            return false;
        }

        if(nums[i] > --max_jump){
            max_jump = nums[i];
        }
        
    }

    return true;

};