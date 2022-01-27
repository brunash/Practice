function oracle(gestures){
  let wins = { "rock": "scissors", "paper": "rock", "scissors": "paper"},
      res = [], 
      hands = ["rock", "paper","scissors"],
      counts = []
  
  for(let h of hands){
    let count = 0
    for(let g of gestures){
      if(wins[h] ===g ) count ++
      else if ( h != g) count --
    }
  counts.push(count)
}
  return counts.every (c => !c) ? "tie" : counts.map((v,i) => v >0 ? hands[i] : null).filter(v => v).join("/")
}
