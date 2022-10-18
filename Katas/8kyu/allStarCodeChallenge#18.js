function strCount(str, letter) {
  count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count += 1;
    }
  }
  return count;
}
