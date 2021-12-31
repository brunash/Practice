function parseF(s) {
  
  if (typeof s === 'boolean' || typeof s === 'undefined' || (isNaN(Number(s)))) {
    return null;
  } else {
    return Number(s);
  }
}



