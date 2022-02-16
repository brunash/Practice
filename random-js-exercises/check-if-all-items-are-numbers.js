// ================== isNumber =====================

// Question:
// Write a function that checks if all items in an array are numbers. Return a boolean.

// =================================================
/* 
>1 Well we know we have an array.
>2 establish a function
>3 We also a parse aLL the data. => use a loop 
>4 we need argument/parameter. => array
>5 If statement, if we have a number, we can return true, else return false
>6 We will prob use typeof as our method to check the value
*/

function isNumber(arr) {
  let result = true;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      result = false;
    }
  }
  return result;
}

const isNumberF = arr => !arr.find(item => typeof item !== "number")


let arr1 = [1, 2, 3];
let arr2 = [1, "xxx", 3];
console.log(isNumberF(arr1));
