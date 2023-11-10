const products = [
  {
    id: 1,
    name: 'Product 1',
    checked: false,
    quantity: 5,
  },
  {
    id: 2,
    name: 'Product 2',
    checked: false,
    quantity: 5,
  },
  {
    id: 3,
    name: 'Product 3',
    checked: false,
    quantity: 5,
  },
  {
    id: 4,
    name: 'Product 4',
    checked: false,
    quantity: 5,
  },
  {
    id: 5,
    name: 'Product 5',
    checked: false,
    quantity: 5,
  },
  {
    id: 6,
    name: 'Product 6',
    checked: false,
    quantity: 5,
  },
  {
    id: 7,
    name: 'Product 7',
    checked: false,
    quantity: 5,
  },
  {
    id: 8,
    name: 'Product 8',
    checked: false,
    quantity: 5,
  },
  {
    id: 9,
    name: 'Product 9',
    checked: false,
    quantity: 5,
  },
  {
    id: 10,
    name: 'Product 10',
    checked: false,
    quantity: 5,
  },
  {
    id: 11,
    name: 'Product 11',
    checked: false,
    quantity: 5,
  },
  {
    id: 12,
    name: 'Product 12',
    checked: false,
    quantity: 5,
  },
  {
    id: 13,
    name: 'Product 13',
    checked: false,
    quantity: 5,
  },
  {
    id: 14,
    name: 'Product 14',
    checked: false,
    quantity: 5,
  },
  {
    id: 15,
    name: 'Product 15',
    checked: false,
    quantity: 5,
  },
  {
    id: 16,
    name: 'Product 16',
    checked: false,
    quantity: 5,
  },
  {
    id: 17,
    name: 'Product 17',
    checked: false,
    quantity: 5,
  },
  {
    id: 18,
    name: 'Product 18',
    checked: false,
    quantity: 5,
  },
  {
    id: 19,
    name: 'Product 19',
    checked: false,
    quantity: 5,
  },
  {
    id: 20,
    name: 'Product 20',
    checked: false,
    quantity: 5,
  },
];

export type Product = (typeof products)[number];

export default function loadProducts(): Promise<Product[]> {
  return new Promise((res) => {
    setTimeout(() => {
      res(products);
    }, 2000);
  });
}
