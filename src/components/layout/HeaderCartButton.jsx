import { useContext, useEffect, useState } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../cart/CartIcon";
import { CartContext } from "../../stored/CartProvider";

export default function HeaderCartButton({ onCartShow }) {
  const [btnBump, setBtnBump] = useState(false);

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberInCart = items.reduce((current, i) => {
    return current + i.total;
  }, 0);

  const buttonClass = `${styles.button} ${btnBump ? styles.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBtnBump(true);

    const timer = setTimeout(() => {
      setBtnBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <div>
      <button onClick={onCartShow} className={buttonClass}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>{numberInCart}</span>
      </button>
    </div>
  );
}
