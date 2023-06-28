import React, { createContext, useReducer } from "react";

const initialCartState = [];

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

  const addCartItem = (item) => {
    cartDispatch({ type: "add", payload: item });
  };

  const removeCartItem = (itemId) => {
    cartDispatch({ type: "remove", payload: itemId });
  };

  const cartContextValue = {
    cart: cartState,
    addCartItem,
    removeCartItem,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export { CartContext };
