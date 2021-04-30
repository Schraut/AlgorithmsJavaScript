var removeDuplicates = function(nums) {

    var nums = [1, 1, 2];
    if (nums.length == 0) return 0;
    
    var i = 0;
    for (j = 1; nums.length > j; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }

  //      console.log(nums[i]);
    } 
    return i + 1;
};

removeDuplicates();