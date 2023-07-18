import { useContext } from "react";
import styles from "./ProductItem.module.css";
import ProductItemForm from "./ProductItemForm";
import { CartContext } from "../../../stored/CartProvider";

export default function ProductItem({ list }) {
  const cartCtx = useContext(CartContext);

  const price = `€${list.price.toFixed(2)}`;

  const addToCart = (total) => {
    cartCtx.addItem({
      id: list.id,
      name: list.name,
      total: total,
      price: list.price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{list.name}</h3>
        <div className={styles.description}>{list.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <ProductItemForm onAddToCart={addToCart} list={list} />
      </div>
    </li>
  );
}
