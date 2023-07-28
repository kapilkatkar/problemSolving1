/*
step 1 - create a fun and pass params
step 2 - run a roop tils its length
step 2 - check for duplicates 
step 4 - remove dups*/

function removeDups(strng) {
  let strng1 = strng.toLowerCase();
  console.log(strng1);
  let arr = strng1.split("");

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
      }
    }
  }
  return arr;
}
console.log(removeDups("kapilKAtkar"));
