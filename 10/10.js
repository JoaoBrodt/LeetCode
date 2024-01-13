/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    var ans = address.replaceAll(".", "[.]");
return ans;
};