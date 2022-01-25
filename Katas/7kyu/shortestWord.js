function findShort(s){
  let result = Math.min(...s.split(" ").map((word) => word.length));
  return result
  
}