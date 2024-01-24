/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    var ans=0;
    for(i=0; i<jewels.length; i++){
        for(j=0; j<stones.length; j++){
            if(jewels[i]==stones[j]){
                ans++;
            }
        }
    }
    return ans;
};


// var numJewelsInStones = function(jewels, stones) {
//     const jewels_set = new Set();
//     for(const jewel of jewels){
//         jewels_set.add(jewel);
//     }
//     let result = 0;
//     for(const stone of stones){
//         if(jewels_set.has(stone)){
//             result++;
//         }
//     }
//     return result
// };