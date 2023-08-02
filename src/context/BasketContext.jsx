// CartContext.js
import React, { createContext, useReducer, useContext } from "react";
import cartReducer from "../store/reducers/cartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialState = { cartItems: [], favoriteItems: [] };
  const [state, dispatch] = useReducer(cartReducer, initialState);
  console.log({ state });
  return (
    <CartContext.Provider value={{ cart: state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
