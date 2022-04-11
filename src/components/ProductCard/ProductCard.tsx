import React from "react";

import styles from "./ProductCard.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { ProductType } from "../../types/burgersTypes";
import { addToCart, removeFromCart } from "../../store/slices/cartSlice";

type ProductCardProps = {
  product: ProductType;
  isCategoryOdd: boolean;
};

export const ProductCard = ({ product, isCategoryOdd }: ProductCardProps) => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const addProductToCart = () => {
    dispatch(addToCart(product));
  };

  const removeProductFromCard = () => {
    dispatch(removeFromCart(product));
  };

  const productsInCart =
    cart.items.find((item) => item.item.id === product.id)?.quantity || 0;

  const renderAddButtons = (productsInCart: number) => {
    if (productsInCart === 0) {
      return (
        <div className={styles.buttons}>
          <button className={styles.singleAddButton} onClick={addProductToCart}>
            +
          </button>
        </div>
      );
    } else {
      return (
        <div className={`${styles.buttons} ${styles.multipleButtons}`}>
          <button
            className={styles.removeButton}
            onClick={removeProductFromCard}
          >
            –
          </button>
          <span className={styles.productsInCard}>{productsInCart}</span>
          <button className={styles.addButton} onClick={addProductToCart}>
            +
          </button>
        </div>
      );
    }
  };

  return (
    <article
      className={`${
        isCategoryOdd ? styles.oddContainer : styles.evenContainer
      }`}
    >
      <div className={styles.imageContainer}>
        <img className={styles.image} src={product.img} alt={product.name} />
        {renderAddButtons(productsInCart)}
      </div>

      <span className={styles.name}>{product.name}</span>
      <span className={styles.price}>{product.price} ₽</span>
    </article>
  );
};
