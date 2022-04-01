import React from "react";

import styles from "./Categories.module.scss";
import { Category } from "../Category/Category";
import { useAppSelector } from "../../store/hooks";

export const Categories = () => {
  const categories = useAppSelector((state) => state.burgers);

  const renderedCategories = categories.map((category, index) => {
    return <Category key={category.id} category={category} index={index + 1} />;
  });

  return (
    <>
      <div className={styles.container}>{renderedCategories}</div>
    </>
  );
};
