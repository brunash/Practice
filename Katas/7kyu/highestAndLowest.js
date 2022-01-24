function highAndLow(numbers){
  let result = numbers.split(' ');
  return `${Math.max(...result)} ${Math.min(...result)}`;
}