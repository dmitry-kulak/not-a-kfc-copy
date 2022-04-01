import React from "react";

import styles from "./PageHeader.module.scss";
import burgerMenuButton from "./images/BurgerMenu.svg";
import cart from "./images/cart.svg";
import { useAppSelector } from "../../store/hooks";

export const PageHeader = () => {
  const total = useAppSelector((state) => state.cart.total);

  return (
    <nav className={styles.container}>
      <button className={styles.burgerMenuButton}>
        <img src={burgerMenuButton} alt="burger menu" />
      </button>
      <span className={styles.logo}>
        <img src={process.env.PUBLIC_URL + "/not-a-kfc-logo.svg"} alt="logo" />
      </span>
      <button className={styles.cartButton}>
        {total} ₽<img src={cart} alt="cart" />
      </button>
    </nav>
  );
};
