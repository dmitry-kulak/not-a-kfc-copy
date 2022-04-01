import React from "react";

import styles from "./Category.module.scss";
import type { CategoryType } from "../../types/burgersTypes";
import { ProductCard } from "../ProductCard/ProductCard";
import { isOdd } from "../../utils/isOdd";
import { useAppSelector } from "../../store/hooks";

type CategoryProps = {
  categoryId: string;
  index: number;
};

export const Category = ({ categoryId, index }: CategoryProps) => {
  const { allBurgers, deliveryOrPickup } = useAppSelector(
    (state) => state.burgers
  );
  const category = allBurgers.find(
    (category: CategoryType) => category.id === categoryId
  )!;
  const isCategoryOdd = isOdd(index);

  const products = category.products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      deliveryOrPickup={deliveryOrPickup}
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
