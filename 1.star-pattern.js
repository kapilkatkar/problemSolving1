// *****
// *****
// *****
// *****
// *****
//print this pattern

/* for 0 run will loop
0 -- 0
0 -- 1
0 -- 2
0 -- 3
0 -- 4 
then print txt(*****)
then same for 1 to 4*/
function starPattern1(input) {
  for (let i = 0; i < input; i++) {
    let txt = ""; // Reset the txt variable for each row
    for (let j = 0; j < input; j++) {
      txt += "*";
    }
    console.log(txt);
  }
}
console.log(starPattern1(5));

// *****
// ****
// ***
// **
// *
function starPattern2(input) {
  for (let i = 0; i < input; i++) {
    let txt = "";
    for (let j = 0; j < input - i; j++) {
      txt += "*";
    }
    console.log(txt);
  }
}
console.log(starPattern2(5));

//*
//**
//***
//****
//*****
function starPattern3(input) {
  for (let i = 0; i < input; i++) {
    let txt = "";
    for (let j = 0; j <= i; j++) {
      txt += "*";
    }
    console.log(txt);
  }
}
starPattern3(5);

// 111
// *
// 333
// *
// 555

// step1 - loop, for the no of rows
// step2 - we will crete if else conditions
// step2.1 - if it is even no print *
//             else i

function oddPattern(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      console.log("*");
    } else {
      console.log(`${i}${i}${i}`);
    }
  }
}
console.log(oddPattern(5));

// ####
// 2
// ####
// 4
// ####
// 6
// ####

// step1 - first need a loop for the no of rows
// step2 - we will crete if else conditions
// step2.1 - if condition (for even number) - if it is even no print i
//  else #

function evenPattern(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(`${i}`);
    } else {
      console.log("####");
    }
  }
}
console.log(evenPattern(7));
