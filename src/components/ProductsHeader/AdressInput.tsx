import React from "react";
import { Field, useField } from "formik";

import styles from "./ProductsHeader.module.scss";

type AddressInputProps = {
  label: "Улица" | "Дом";
  name: "street" | "house";
};

export const AddressInput = ({ label, name }: AddressInputProps) => {
  const field = useField(name);

  return (
    <div className={styles.inputContainer}>
      <label className={styles.inputLabel} htmlFor={name}>
        {label}
      </label>
      <Field className={styles.input} name={name} placeholder="Остоженка" />

      {field[1].error && (
        <div className={styles.errorTooltip}>{field[1].error}</div>
      )}
    </div>
  );
};
