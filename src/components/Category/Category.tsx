import React from "react";

import styles from "./Category.module.scss";
import type { CategoryType } from "../../types/burgersTypes";
import { ProductCard } from "../ProductCard/ProductCard";
import { isOdd } from "../../utils/isOdd";

type CategoryProps = {
  category: CategoryType;
  index: number;
};

export const Category = ({ category, index }: CategoryProps) => {
  const isCategoryOdd = isOdd(index);

  const products = category.products.map((product) => (
    <ProductCard
      key={product.id}
      name={product.name}
      img={product.img}
      price={product.price}
      canBeDelivered={product.delivery}
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
