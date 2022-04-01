import React, { useEffect } from "react";
import { FormikProps, FormikValues } from "formik";

import styles from "./App.module.scss";

import { Categories } from "./components/Categories/Categories";
import { CategoryPanel } from "./components/CategoryPanel/CategoryPanel";
import { PageHeader } from "./components/PageHeader/PageHeader";
import { ProductsHeader } from "./components/ProductsHeader/ProductsHeader";

import { loadAllBurgers } from "./store/slices/burgersSlice";
import { useAppDispatch } from "./store/hooks";
import { PageFooter } from "./components/PageFooter/PageFooter";

export const App = () => {
  const dispatch = useAppDispatch();

  const deliveryFormRef = React.useRef<FormikProps<FormikValues>>(null);

  useEffect(() => {
    dispatch(loadAllBurgers());
  });

  return (
    <>
      <div className={styles.topContent}>
        <PageHeader deliveryFormRef={deliveryFormRef} />

        <ProductsHeader deliveryFormRef={deliveryFormRef} />
      </div>

      <CategoryPanel />

      <Categories />

      <PageFooter />
    </>
  );
};
