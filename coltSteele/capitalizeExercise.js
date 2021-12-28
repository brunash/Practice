function capitalize(str) {
    let strSlice = str.slice(0, 1);
    let upperStr = strSlice.toUpperCase();
    return upperStr + str.slice(1);
}
