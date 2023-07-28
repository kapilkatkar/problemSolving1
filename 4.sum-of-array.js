/*
const arr = [1,3,4,5,6,7,8,9,9];

// Write a function to calcuate the sum of every element of an array

const arrSum = (input)=>{}

console.log(arrSum(arr));

step1- first create a function 
step2- run a for loop till its last element (arr.length)
step3- will create a variable to store sum 
step4- return conditon in the array for sum 
(i.e, - we will add sum and i for its every iteration)
step5- will print the sum
*/

const arr = [1, 3, 4, 5, 6, 7, 8, 9, 9];

function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumOfArray(arr));
