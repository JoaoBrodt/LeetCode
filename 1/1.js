/**
DATA: 09/01
//@param {number[]} nums
//@param {number} target
//@return {number[]}
 */
var twoSum = function(nums, target) {
    for( i=0; i<=nums.length; i++){
        for( j=i+1; j<=nums.length-1; j++){
            if(nums[i]+nums[j]==target){
                result = [i,j];
                }
        }
    }
     return result;
};


