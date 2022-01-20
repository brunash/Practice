function uniTotal(str){
  return str.split('').reduce(function(last,now){
    return last+now.charCodeAt();
  },0);
}