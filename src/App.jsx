import Header from "./components/layout/Header";
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";
import { useState } from "react";
import { CartProvider } from "./stored/CartProvider";

function App() {
  const [cartShow, setCartShow] = useState(false);

  const showCart = () => {
    setCartShow(!cartShow);
  };

  return (
    <CartProvider>
      {cartShow && <Cart onCartShow={showCart} />}
      <Header onCartShow={showCart} />
      <main>
        <Products />
      </main>
    </CartProvider>
  );
}

export default App;
