function oneAfterAnother(
  funTab: (() => Promise<number>)[],
  threshold: number,
  cb: (result: number) => void,
) {
  let result = 0;

  function helper(
    funTab: (() => Promise<number>)[],
    threshold: number,
    cb: (result: number) => void,
  ) {
    const fun = funTab[0];

    if (fun)
      fun().then((res) => {
        if (res > threshold) result += 1;

        helper(funTab.slice(1), threshold, cb);
      });
    else cb(result);
  }

  helper(funTab, threshold, cb);
}

oneAfterAnother(
  [async () => 2, async () => 3, async () => 4, async () => 1],
  2,
  (result) => console.log(result),
);
