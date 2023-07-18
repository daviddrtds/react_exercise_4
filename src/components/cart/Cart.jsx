import { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../ui/Modal";
import { CartContext } from "../../stored/CartProvider";
import CartItem from "./CartItem";

export default function Cart({ onCartShow }) {
  const cartCtx = useContext(CartContext);
  const total = `€${cartCtx.total.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const removeFromCart = (id) => {
    cartCtx.removeItem(id);
  };

  const addToCart = (item) => {
    const cartItem = { ...item, total: 1 };
    cartCtx.addItem(cartItem);
  };

  const cartItems = cartCtx.items.map((i) => {
    return (
      <CartItem
        onAdd={addToCart.bind(null, i)}
        onRemove={removeFromCart.bind(null, i.id)}
        key={i.id}
        {...i}
      />
    );
  });
  return (
    <Modal onCartShow={onCartShow}>
      <ul className={styles.cart_items}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{total}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={onCartShow} className={styles.button__alt}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
}
