/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    var result=0;

    await promise1.then((value)=>{result+=value});
    await promise2.then((value)=>{result+=value});

    return result;
};


// OUTRAS SOLUÇÕES POSSÍVEIS
// var addTwoPromises = async function(promise1, promise2) {

//     const [value1, value2] = await Promise.all([promise1, promise2]);
//         var result=value1+value2;

//     return result;
// };


// var addTwoPromises = async function(promise1, promise2) {
// return await promise1 + await promise2;
// }


// var addTwoPromises = async function(promise1, promise2) {
// const value1 = await promise1;
// const value2 = await promise2;
// return value1 + value2;
// }