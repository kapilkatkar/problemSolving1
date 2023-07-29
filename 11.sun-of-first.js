/**
 * @description Method to find two sum pair
 * @param {Numer[]} arr
 * @param {Numer} k
 * @returns {Number[]}
 *
 * step1 -create a function and pass params
 * step2 -run two loops till its length
 * step3 -check the addition for consecutive numbers
 * step4 - retrun
 */

const arr = [8, 2, -1, 3, 1, 6, 3, 7, -9, -1];

function sumOfTwoConsecutiveNo(arr, num) {
  let sum = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) {
        return `${arr[i]} and ${arr[j]}`;
      }
    }
  }
}
console.log(sumOfTwoConsecutiveNo([1, 2, -1, 3, 1, 6, 3, 7, -9, -1], 7));
