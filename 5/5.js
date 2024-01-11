/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    var ans = nums;
    Array.prototype.push.apply(ans, nums);

    return ans;
};



//OUTRAS POSSÍVEIS SOLUÇÕES
//   return [...nums,...nums]


// var getConcatenation = function(nums) {
//     var result = nums;
//     const size = nums.length;
//     for (let i = 0; i <size; i++) {
//         result.push(nums[i])
//     }
//     return result
// };