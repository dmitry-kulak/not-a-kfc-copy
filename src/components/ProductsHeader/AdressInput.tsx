import React from "react";
import { Field } from "formik";

import styles from "./ProductsHeader.module.scss";

type AddressInputProps = {
  label: "Улица" | "Дом";
  name: "street" | "house";
};

export const AddressInput = ({ label, name }: AddressInputProps) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.inputLabel} htmlFor={name}>
        {label}
      </label>
      <Field className={styles.input} name={name} placeholder="Остоженка" />
    </div>
  );
};
