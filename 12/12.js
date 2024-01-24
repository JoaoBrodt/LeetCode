/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
   var ans = 0;

    for (i = 0; i <= operations.length; i++) {
        if (operations[i] == 'X++' || operations[i] == '++X') {
            ans+=1;
        }

        if (operations[i] == 'X--' || operations[i] == '--X') {
            ans-=1;
        }
    }
    return ans;
};


// var finalValueAfterOperations = function (operations) {
//     var ans = 0;
// for (i = 0; i <operations.length; i++) {
//     var palavra = operations[i];
//     for(j=0; j<=palavra.length; j++){
//         if(palavra[j] == "+"){
//             ans+=0.5
//         }
//         if(palavra[j] == "-"){
//             ans-=0.5
//         }
//     }
// }
// return ans;
//}


// var finalValueAfterOperations = function (operations) {
//     var ans = 0;
 
//      for (i = 0; i <operations.length; i++) {
//          for(j=0; j<=operations[i].length; j++){
//              if(operations[i][j] == "+"){
//                  ans+=0.5
//              }
//              if(operations[i][j] == "-"){
//                  ans-=0.5
//              }
//          }
//      }
//      return ans;
//  };


// var finalValueAfterOperations = function (operations) {
// var ans = 0;

// for (i = 0; i <= operations.length; i++) {
//     if (operations[i] == 'X++' || operations[i] == '++X') ans++;
//     if (operations[i] == 'X--' || operations[i] == '--X')ans--;
// }
// return ans;
// };

// var finalValueAfterOperations = function (operations) {
// var ans = 0;

// for (i = 0; i <= operations.length; i++) {
//     if (operations[i] == 'X++' || operations[i] == '++X') ans++;
//      else ans--;
// }
// return ans;
// };
