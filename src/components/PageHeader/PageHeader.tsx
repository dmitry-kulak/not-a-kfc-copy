import React from "react";

import styles from "./PageHeader.module.scss";
import burgerMenuButton from "./images/BurgerMenu.svg";
import cartIcon from "./images/cart.svg";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { submitCart } from "../../store/slices/cartSlice";

export const PageHeader = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(submitCart(cart));
  };

  return (
    <nav className={styles.container}>
      <button className={styles.burgerMenuButton}>
        <img src={burgerMenuButton} alt="burger menu" />
      </button>
      <span className={styles.logo}>
        <img src={process.env.PUBLIC_URL + "/not-a-kfc-logo.svg"} alt="logo" />
      </span>
      <button className={styles.cartButton} onClick={handleClick}>
        {cart.total} ₽<img src={cartIcon} alt="cart" />
      </button>
    </nav>
  );
};
