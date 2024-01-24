/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    var ans=[];
    for(i=0; i<nums.length/2; i++){
        ans.push(nums[i], nums[n+i]);
    }
    return ans;
};



// const shuffle = (nums, n) => {
//     const result = new Array(2 * n);
//     let j = 0;
//     for (let i = 0; i < n; i++) {
//       result[j++] = nums[i];
//       result[j++] = nums[i + n];
//     }
//     return result;
//   };