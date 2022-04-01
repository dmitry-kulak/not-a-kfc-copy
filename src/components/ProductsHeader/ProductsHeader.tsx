import { Formik, Form } from "formik";
import React from "react";

import styles from "./ProductsHeader.module.scss";
import { AddressInput } from "./AdressInput";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setDeliveryOrPickup } from "../../store/slices/burgersSlice";

const formInitialValues = {
  street: "",
  house: "",
};

export const ProductsHeader = () => {
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
          <>
            <span className={styles.deliveryIn}>Доставка г. Москва</span>

            <Formik
              initialValues={formInitialValues}
              onSubmit={() => console.log("address submitted")}
            >
              <Form className={styles.form}>
                <AddressInput label="Улица" name="street" />
                <AddressInput label="Дом" name="house" />
              </Form>
            </Formik>
          </>
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
