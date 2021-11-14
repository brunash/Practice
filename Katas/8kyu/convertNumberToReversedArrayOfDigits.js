function digitize(n) {
    let newArray = n.toString().split("").reverse().join("").split("").map((ele) => Number(ele))
    return newArray
}