function rentalCarCost(d) {
  return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
}

// -------------------------------



function rentalCarCost(d) {
  if(d<3) return d * 40;
  if(7>d && d>=3) return (d*40 -20);
  if(d>=7) return (d*40 -50);
}