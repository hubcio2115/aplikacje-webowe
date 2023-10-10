function fun1(arg: number, cb: (value: number) => void) {
  setTimeout(() => {
    cb(arg + 2);
  }, 2000);
}

function fun2(arg: number, cb: (value: number) => void) {
  setTimeout(() => {
    cb(arg * 3);
  }, 1000);
}

function fun3(arg: number, cb: (value: number) => void) {
  setTimeout(() => {
    cb(arg - 1);
  }, 1500);
}

function sequenceCalculations(
  funArr: Array<typeof fun1>,
  cb: (num: number) => void,
) {
  function helper(index: number, acc: number) {
    if (index < funArr.length)
      funArr[index](acc, (value) => {
        helper(index + 1, value);
      });
    else cb(acc);
  }

  helper(0, 0);
}

sequenceCalculations([fun1, fun2, fun3], (result: number) =>
  console.log(result),
);
