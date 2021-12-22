function remainder(a, b){
  // Divide the larger argument by the smaller argument and return the remainder
  if (a > b && b === 0) {
    return NaN;
  } else if (b > a && a === 0) {
    return NaN;
  }
  return (a > b) ? a % b : b % a;
}