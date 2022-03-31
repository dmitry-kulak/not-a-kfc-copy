export type Product = {
  id: string;
  name: string;
  price: number;
  delivery: boolean;
  img: string;
};

export type Category = {
  id: string;
  name: string;
  products: Product[];
};
