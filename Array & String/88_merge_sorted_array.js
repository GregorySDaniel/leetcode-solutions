var merge = function(nums1, m, nums2, n) {
    let nums1_pointer = m - 1;
    let nums2_pointer = n - 1;
    let write_pointer = m + n - 1;
    
    while (nums2_pointer >= 0) {
        if (nums1_pointer >= 0 && nums1[nums1_pointer] > nums2[nums2_pointer]) {
            nums1[write_pointer--] = nums1[nums1_pointer--];
        } else {
            nums1[write_pointer--] = nums2[nums2_pointer--];
        }
    }
};