function friends(n, acc=0){
  if(n <=2){
    return acc;
    }else{
    return friends(n/2, acc +1)
    }
}