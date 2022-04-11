import React from "react";

import styles from "./Category.module.scss";
import type { CategoryType, DeliveryOrPickup } from "../../types/burgersTypes";
import { ProductCard } from "../ProductCard/ProductCard";
import { isOdd } from "../../utils/isOdd";
import { useAppSelector } from "../../store/hooks";

type CategoryProps = {
  categoryId: string;
  index: number;
};

const getCategory = (allBurgers: CategoryType[], categoryId: string) => {
  return allBurgers.find((category) => category.id === categoryId)!;
};

const filterProducts = (
  category: CategoryType,
  deliveryOrPickup: DeliveryOrPickup
) => {
  switch (deliveryOrPickup) {
    case "delivery":
      return category.products.filter((product) => product.delivery);

    case "pickup":
      return category.products;
  }
};

export const Category = ({ categoryId, index }: CategoryProps) => {
  const { allBurgers, deliveryOrPickup } = useAppSelector(
    (state) => state.burgers
  );
  const category = getCategory(allBurgers, categoryId);
  const filteredProducts = filterProducts(category, deliveryOrPickup);
  const isCategoryOdd = isOdd(index);

  const products = filteredProducts.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      isCategoryOdd={isCategoryOdd}
    />
  ));

  return (
    <section
      id={category.name}
      className={`${isCategoryOdd ? styles.oddCategory : ""}`}
    >
      <div className={styles.content}>
        <span className={styles.name}>{category.name}</span>
        <div className={styles.products}>{products}</div>
      </div>
    </section>
  );
};
