var twoSum = function(nums, target) {
    const hashMap = {};

    for(let i=0;i<nums.length;i++){
        if (nums[i] in hashMap){
            return [i, hashMap[nums[i]]]; 
        }
        hashMap[target-nums[i]] = i;
    }
};