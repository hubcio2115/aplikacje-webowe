const arr: { x: number; y: number }[] = [
  { x: 4, y: 2 },
  { x: 1, y: 8 },
  { x: 4, y: 2 },
];

function calculateAverage(
  input: typeof arr,
  key: keyof (typeof arr)[number],
): number {
  return (
    input.reduce(
      (acc: number, value: (typeof arr)[number]) => acc + value[key],
      0,
    ) / input.length
  );
}

console.log(calculateAverage(arr, "y"));
