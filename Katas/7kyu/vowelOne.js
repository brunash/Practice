const vowelRegex = "aeiouAEIOU";

function vowelOne(s) {
    let arr = s.split('')
    return mappedArray = arr.map(e => vowelRegex.includes(e) ? '1': '0').join('');
}