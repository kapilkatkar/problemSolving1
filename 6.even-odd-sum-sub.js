// sum of even number
let arr1 = [1, 2, 3, -4, 4, 4];

function sum(arr1) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 0) {
      sum += arr1[i];
    }
  }
  return sum;
}
console.log(sum(arr1));

// sum of odd number
let arr2 = [1, 2, 3, -4, 4, 4, 9];

function sum(arr2) {
  let sum = 0;
  for (let i = 0; i < arr2.length; i++) {
    if (arr1[i] % 2 !== 0) {
      sum += arr2[i];
    }
  }
  return sum;
}
console.log(sum(arr2));

// sub of even number
let arr3 = [1, 2, 3, -4, 4, 4];

function sub(arr3) {
  let sub = 0;
  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] % 2 === 0) {
      sub -= arr3[i];
    }
  }
  return sub;
}
console.log(sub(arr3));

// sub of odd number
let arr4 = [1, 2, 3, -4, 4, 4];

function sub(arr4) {
  let sub = 0;
  for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] % 2 !== 0) {
      sub -= arr3[i];
    }
  }
  return sub;
}
console.log(sub(arr4));
