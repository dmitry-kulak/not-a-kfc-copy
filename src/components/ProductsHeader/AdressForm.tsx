import React from "react";
import { Form, Formik, FormikProps, FormikValues } from "formik";
import * as Yup from "yup";

import styles from "./ProductsHeader.module.scss";
import { AddressInput } from "./AdressInput";

export const validationSchema = Yup.object({
  street: Yup.string().required("Нужно заполнить для оформления доставки"),
  house: Yup.string().required("Нужно заполнить для оформления доставки"),
});

const formInitialValues = {
  street: "",
  house: "",
};

type AddressFormProps = {
  deliveryFormRef: React.RefObject<FormikProps<FormikValues>>;
};

export const AddressForm = ({ deliveryFormRef }: AddressFormProps) => {
  return (
    <>
      <span className={styles.deliveryIn}>Доставка г. Москва</span>

      <Formik
        initialValues={formInitialValues}
        onSubmit={() => console.log("address submitted smh")}
        validationSchema={validationSchema}
        validateOnChange={false}
        innerRef={deliveryFormRef}
      >
        <Form id="addressForm" className={styles.form}>
          <AddressInput label="Улица" name="street" />
          <AddressInput label="Дом" name="house" />
        </Form>
      </Formik>
    </>
  );
};
