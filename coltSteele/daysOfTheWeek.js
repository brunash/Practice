const days = {
    1: 'Monday',
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
}
 
const returnDay = (number) => {
    if(number < 1 || number > 7) {
        return null;
    }
    return(days[number])
}