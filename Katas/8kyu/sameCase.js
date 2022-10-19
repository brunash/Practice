function sameCase(a, b) {

    function isCharacterALetter(char) {
        return (/[a-zA-Z]/).test(char)
    }

    if (isCharacterALetter(a)==false || isCharacterALetter(b)==false) {
        return -1
    }else if (a == a.toUpperCase() && b == b.toUpperCase() || a == a.toLowerCase() && b == b.toLowerCase()) {
        return 1
    }else {
        return 0
    }
}