export type ProductType = {
  id: string;
  name: string;
  price: number;
  delivery: boolean;
  img: string;
};

export type CategoryType = {
  id: string;
  name: string;
  products: ProductType[];
};

export type DeliveryOrPickup = "delivery" | "pickup";
