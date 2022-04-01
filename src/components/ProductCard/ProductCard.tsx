import React from "react";

import styles from "./ProductCard.module.scss";

type ProductCardProps = {
  name: string;
  price: number;
  img: string;
  canBeDelivered: boolean;
  isCategoryOdd: boolean;
};

export const ProductCard = ({
  name,
  img,
  price,
  canBeDelivered,
  isCategoryOdd,
}: ProductCardProps) => {
  return (
    <article
      className={`${
        isCategoryOdd ? styles.oddContainer : styles.evenContainer
      }`}
    >
      <img className={styles.image} src={img} alt={name} />
      <span className={styles.name}>{name}</span>
      <span className={styles.price}>{price} ₽</span>
    </article>
  );
};
