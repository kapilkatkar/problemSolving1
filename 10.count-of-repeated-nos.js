/*
step1 - create a function and pass the params
step2 - create a local variable
setp3 - run a loop and iterate till its length 
step4 - if condtion
step5 - check if the number is repeating or not,if it is increasing increase the count
step6 - return count
*/

function countOfRepeatedNo(arr, num) {
  let count = "";
  if (!Array.isArray(arr) || typeof num !== "number" || arr.length === 0) {
    return "Please Enter valid input";
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        count++;
      }
    }
  }
  return count;
}
console.log(
  countOfRepeatedNo([1, 2, 3, 4, 1, 2, 3, 3, 3, 4, 5, 6, 7, 8, 1, 2], 3)
);
