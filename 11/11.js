/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    var kelvin = celsius + 273.15;
    var fahrenheit = celsius*1.80+32.00;
    ans = [kelvin, fahrenheit];

    return ans;
};


// one line: 
// return [273.15 + celsius,1.8 * celsius + 32] 