/** 
 * by using build in functions
 *@description  anagram
 word or phrase that's formed by rearranging the letters of another word or phrase
 step 1 - split , sort , join -both the array 
 step 2 - check if they are equal
 */

function angramFun(strng1, strng2) {
  if (strng1.length !== strng2.length) {
    return `it is not an anagram`;
  }
  let arr1 = strng1.split("");
  let arrSort1 = arr1.sort();
  console.log(arrSort1);
  let arrJoin1 = arrSort1.join("");
  console.log(arrJoin1);

  let arr2 = strng2.split("");
  let arrSort2 = arr2.sort();
  let arrJoin2 = arrSort2.join("");
  if (arrJoin1 === arrJoin2) {
    return `it is an anagram`;
  } else {
    return `it is not an anagram`;
  }
}

console.log(angramFun("kapwil", "pilak"));

//another way
function angramFun1(string1, string2) {
  if (string1.length !== string2.length) {
    return `it is not an anagram`;
  }
  let arr1 = string1.split("");
  let arr2 = string2.split("");
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arr2.splice(j, 1);
        break;
      }
    }
  }
  return arr2.length > 0 ? false : true;
}
console.log(angramFun1("kapil", "lipak"));
