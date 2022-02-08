function sexyName(name) {
  const n = [...name.toUpperCase()].reduce((a, b) => a + (SCORES[b] || 0), 0)
  return n <= 60 ? 'NOT TOO SEXY' : n <= 300 ? 'PRETTY SEXY' : n <= 599 ? 'VERY SEXY' : 'THE ULTIMATE SEXIEST' 
}