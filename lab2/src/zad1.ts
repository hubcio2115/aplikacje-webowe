const arr = [
  { x: 4, y: 2 },
  { x: 1, y: 8 },
  { x: 4, y: 2 },
];

function calculateAverage(input: typeof arr, key: keyof (typeof arr)[number]) {
  return input.reduce((acc, value) => acc + value[key], 0) / input.length;
}

console.log(calculateAverage(arr, "y"));

