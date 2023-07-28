/**
 step 1 - create a fun and pass para
 step 2 - run a loop till its half of the length
 step 3 - comapre the words
 */

function palindromefun(strng1) {
  let strng = strng1.toLowerCase();
  for (let i = 0; i < strng.length / 2; i++) {
    if (strng[i] !== strng[strng.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(palindromefun("madam"));
