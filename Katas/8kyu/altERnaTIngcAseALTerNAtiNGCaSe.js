String.prototype.toAlternatingCase = function () {
    let result = "";
    this.split("").forEach(el => {
        if (el === el.toUpperCase()) {
            result = `${result}${el.toLowerCase()}`
        } else {
            result = `${result}${el.toUpperCase()}`
        }
    })
    return result
}