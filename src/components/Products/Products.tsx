import React from "react";
import { useAppSelector } from "../../hooks/redux-hooks";
import { Product } from "./Product/Product";
import styles from "./styles.module.scss";

export const Products: React.FC = () => {
  const { products } = useAppSelector((state) => state.products);
  return (
    <div className={styles.products}>
      {products.map((prod) => (
        <Product product={prod} key={prod.id} />
      ))}
    </div>
  );
};
