function runLoop(a) {
  if (a <= 1 || a === NaN) {
    console.log("please enter valid number");
  } else {
    for (i = 2; i <= a; i++) {
      console.log(i);
    }
  }
}
console.log(runLoop(10));

function runLoop2(num2) {
  if (num2 <= 1 || num2 === NaN) {
    console.log("please enter valid number");
  } else {
    for (i = num2; i > 1; i--) {
      console.log(i);
    }
  }
}
console.log(runLoop2(10));

function runLoop3(a) {
  if (a <= 1 || a === NaN) {
    console.log("please enter valid number");
  } else {
    for (i = 2; i <= a; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  }
}
console.log(runLoop3(10));

function runLoop4(a) {
  if (a <= 1 || a === NaN) {
    console.log("please enter valid number");
  } else {
    for (i = 2; i <= a; i++) {
      for (let j = 0; j <= 10; j++) {
        if (i % 2 !== 0) {
          console.log(i);
        }
      }
    }
  }
}
console.log(runLoop4(10));

function runLoop5(num2) {
  if (num2 <= 1 || num2 === NaN) {
    console.log("please enter valid number");
  } else {
    for (i = num2; i > 1; i--) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  }
}
console.log(runLoop5(10));

for (i = 0; i <= 5; i++) {
  for (j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

for (i = 0; i < 5; i++) {
  for (j = 0; j < 4; j++) {
    for (k = 0; k < 3; k++) {
      console.log(i, j, k);
    }
  }
}
