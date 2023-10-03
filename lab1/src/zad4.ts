async function compare(
  fun1: () => Promise<number>,
  fun2: () => Promise<number>,
  cb: (result: boolean) => void,
) {
  const res1 = fun1();
  const res2 = fun2();

  cb((await res1) === (await res2));
}

compare(
  async () => 4,
  async () => 4,
  (result) => console.log(result),
);
