var majorityElement = function(nums) {
    let array_size = nums.length;
    let major_element = nums[0]; 
    let counter = 1;
    
    for(let i=1;i<array_size;i++){
        if(nums[i]==major_element){
            counter++;
        } else {
            counter--;
        }

        if(counter==0){
            major_element = nums[i];
            counter++;
        }
    }

    return major_element;
};