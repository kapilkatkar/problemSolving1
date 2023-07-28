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
