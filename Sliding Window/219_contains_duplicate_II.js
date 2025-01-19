var containsNearbyDuplicate = function(nums, k) {
    let lp = 0;
    let rp = 0;
    const map = {};
    map[nums[lp]] = 1;

    if(k<1){
        return false;
    }

    while(rp < nums.length){
        rp++;

        if(nums[rp] in map && map[nums[rp]] > 0){
            return true;
        } else {
            map[nums[rp]] = 1;
        }
        

        while((rp-lp) >= k){
            map[nums[lp]]--;
            lp++;
        }
    }

    return false;

};