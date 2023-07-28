const arr2 = [1, 3, 12, -4];
function subOfNum(arr2) {
  let sub = 0;
  for (let i = 0; i < arr2.length; i++) {
    sub -= arr2[i];
  }
  return sub;
}
console.log(subOfNum(arr2));
