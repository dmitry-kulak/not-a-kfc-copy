import React from "react";
import { FormikProps, FormikValues } from "formik";

import styles from "./PageHeader.module.scss";
import burgerMenuButton from "./images/BurgerMenu.svg";
import { ReactComponent as CartIcon } from "./images/cart.svg";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { submitCart } from "../../store/slices/cartSlice";

type PageHeaderProps = {
  deliveryFormRef: React.RefObject<FormikProps<FormikValues>>;
};

export const PageHeader = ({ deliveryFormRef }: PageHeaderProps) => {
  const { cart, burgers } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const handleClick = async () => {
    if (burgers.deliveryOrPickup === "pickup") {
      dispatch(submitCart(cart));
    }

    if (deliveryFormRef.current) {
      await deliveryFormRef.current.validateForm();
      if (deliveryFormRef.current.isValid) {
        dispatch(submitCart(cart));
      }
    }
  };

  return (
    <nav className={styles.container}>
      <button className={styles.burgerMenuButton}>
        <img src={burgerMenuButton} alt="burger menu" />
      </button>

      <span className={styles.logo}>
        <img src={process.env.PUBLIC_URL + "/not-a-kfc-logo.svg"} alt="logo" />
      </span>

      <button
        className={styles.cartButton}
        onClick={handleClick}
        disabled={cart.total === 0}
      >
        {cart.total} ₽ <CartIcon />
      </button>
    </nav>
  );
};
