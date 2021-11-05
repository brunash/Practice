function positiveSum(arr) {

    var sum = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) { sum = sum + arr[i] }
    }
    return sum
}
//Heads and Legs
function animals(heads, legs) {

    var x = (4 * heads - legs) / 2;
    var y = heads - x;
    if (x < 0 || y < 0) { return 'No solutions' }
    if (x === Math.round(Math.abs(x))) { return [x, heads - x] } else { return 'No solutions' }
}
//Match My Husband
function match(usefulness, months) {
    var sum = usefulness.reduce(function (a, b) { return a + b; }, 0);
    var grvt = 100 * Math.pow(Math.E, -0.15 * months);
    if (sum >= Math.round(grvt, 3)) { return 'Match!'; } else { return 'No match!'; }


}