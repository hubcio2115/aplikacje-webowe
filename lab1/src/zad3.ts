function calculate(
  [fun1, fun2]: [() => Promise<number>, () => Promise<number>],
  fun3: (value: number) => Promise<number>,
  cb: (value: number) => void,
) {
  return Promise.all([fun1(), fun2()])
    .then((res) => fun3(res.reduce((acc, value) => acc + value, 0)))
    .then((res) => cb(res));
}

await calculate(
  [async () => 4, async () => 4],
  async (value) => value * 2,
  (value) => {
    console.log(value);
  },
);
