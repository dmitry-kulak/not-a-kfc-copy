import React from "react";
import { FormikProps, FormikValues } from "formik";

import styles from "./ProductsHeader.module.scss";
import { AddressForm } from "./AdressForm";
import { setDeliveryOrPickup } from "../../store/slices/burgersSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

type ProductsHeaderProps = {
  deliveryFormRef: React.RefObject<FormikProps<FormikValues>>;
};

export const ProductsHeader = ({ deliveryFormRef }: ProductsHeaderProps) => {
  const deliveryOrPickup = useAppSelector(
    (state) => state.burgers.deliveryOrPickup
  );
  const dispatch = useAppDispatch();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const dataAttr = e.currentTarget.getAttribute("data-type") as
      | "delivery"
      | "pickup";
    if (dataAttr !== deliveryOrPickup) {
      dispatch(setDeliveryOrPickup(dataAttr));
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.leftSide}>
        {deliveryOrPickup === "delivery" && (
          <AddressForm deliveryFormRef={deliveryFormRef} />
        )}

        {deliveryOrPickup === "pickup" && (
          <span className={styles.pickupIn}>Самовывоз в г. Москва</span>
        )}
      </div>

      <div className={styles.buttons}>
        <button
          data-type="delivery"
          className={`${styles.button} ${
            deliveryOrPickup === "delivery" && styles.buttonActive
          }`}
          onClick={handleClick}
        >
          Доставка
        </button>
        <button
          data-type="pickup"
          className={`${styles.button} ${
            deliveryOrPickup === "pickup" && styles.buttonActive
          }`}
          onClick={handleClick}
        >
          Самовывоз
        </button>
      </div>
    </header>
  );
};
