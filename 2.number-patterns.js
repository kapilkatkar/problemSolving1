/**
1
12
123
1234
12345 */

function numberPattern1(num) {
  for (let i = 1; i <= num; i++) {
    let txt = "";
    for (let j = 1; j <= i; j++) {
      txt += j;
    }
    console.log(txt);
  }
}
numberPattern1(5);

/*
1
22
333
4444
55555
 */

function numberPattern2(num) {
  for (let i = 1; i <= num; i++) {
    let txt = "";
    for (let j = 1; j <= i; j++) {
      txt += i;
    }
    console.log(txt);
  }
}
numberPattern2(5);

/*
12345
1234
123
12
1
 */
function numberPattern3(num) {
  for (let i = 1; i <= num; i++) {
    let txt = "";
    for (let j = 1; j <= num - i; j++) {
      txt += j;
    }
    console.log(txt);
  }
}
numberPattern3(6);
