import React from "react";

import styles from "./Categories.module.scss";
import { Category } from "../Category/Category";
import { useAppSelector } from "../../store/hooks";

export const Categories = () => {
  const allBurgers = useAppSelector((state) => state.burgers.allBurgers);

  const categoryIds = allBurgers.map((burger) => burger.id);

  const renderedCategories = categoryIds.map((categoryId, index) => {
    return (
      <Category key={categoryId} categoryId={categoryId} index={index + 1} />
    );
  });

  return (
    <>
      <div className={styles.container}>{renderedCategories}</div>
    </>
  );
};
