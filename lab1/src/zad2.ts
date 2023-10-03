const products = [
  { name: "Product 1", price: 10, quantity: 2 },
  { name: "Product 2", price: 5, quantity: 4 },
  { name: "Product 3", price: 8, quantity: 3 },
  { name: "Product 4", price: 12, quantity: 1 },
];

function calculateProductValue(
  product: (typeof products)[number],
  cb: (value: number) => void,
) {
  setTimeout(
    () => {
      const value = product.price * product.quantity;
      cb(value);
    },
    Math.floor(Math.random() * 1000),
  );
}

function calculateTotalValue(n: number, cb: (value: number) => void) {
  const res: number[] = [];

  for (let i = 0; i < n; i++) {
    calculateProductValue(products[i], (value: number) => res.push(value));
  }

  setTimeout(() => {
    cb(res.reduce((acc, price) => acc + price, 0));
  }, 1000);
}

calculateTotalValue(4, (value: number) => {
  console.log(value);
});
