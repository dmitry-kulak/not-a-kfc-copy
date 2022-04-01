import React from "react";
import { Link } from "react-scroll";

import styles from "./CategoryPanel.module.scss";
import { useAppSelector } from "../../store/hooks";

export const CategoryPanel = () => {
  const categories = useAppSelector((state) => state.burgers);

  const listOfCategories = categories.map((category) => {
    return (
      <li key={category.id} className={styles.category}>
        <Link
          to={category.name}
          activeClass={styles.categoryActive}
          smooth={true}
          offset={-25}
          spy={true}
        >
          {category.name}
        </Link>
      </li>
    );
  });

  return (
    <nav className={styles.navbar}>
      <div className={styles.content}>
        <ul className={styles.categories}>{listOfCategories}</ul>
      </div>
    </nav>
  );
};
