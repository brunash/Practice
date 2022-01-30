function reverseFactorial(num) {
  let product = 1
  let n = 1
  
  while(product <= num){
    if(product === num){
      return `${n}!`
  }
  n++
  product = product * n
}
  return 'None'
  }