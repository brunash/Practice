function modifyMultiply (str,loc,num) {
    const strArray = str.split(" ");

    for ( i=0; i < strArray.length; i++ ) {
        if ( i == loc) {
            return (strArray[i] + "-").repeat(num).slice(0,1);
        }
    }
}