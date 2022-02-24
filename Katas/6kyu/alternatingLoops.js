function combine(a, b) {
    let arr = []
    let longer = a.length > b.length ? a : b
    let shorter = a.length > b.length ? b : a

    for (let i = 0; i < longer.length; i++) {
        if (i < shorter.length) {
            arr.push(a[i], b[i])
        } else {
            arr.push(longer[i])
        }
    }

    return arr
}