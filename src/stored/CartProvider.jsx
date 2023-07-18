import { createContext } from "react";
import { useReducer } from "react";

export const CartContext = createContext({
  items: [],
  total: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

const defaultCartState = {
  items: [],
  total: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotal = state.total + action.item.price * action.item.total;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        total: existingCartItem.total + action.item.total,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      total: updatedTotal,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotal = state.total - existingItem.price;
    let updatedItems;
    if (existingItem.total === 1) {
      updatedItems = state.items.filter((i) => i.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, total: existingItem.total - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      total: updatedTotal,
    };
  }

  return defaultCartState;
};

export function CartProvider({ children }) {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addItemCart = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };

  const removeItemCart = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };

  const onCart = {
    items: cartState.items,
    total: cartState.total,
    addItem: addItemCart,
    removeItem: removeItemCart,
  };

  return <CartContext.Provider value={onCart}>{children}</CartContext.Provider>;
}
