// CartContext.js
import React, { createContext, useReducer, useContext } from "react";
import cartReducer from "../store/reducers/cartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialState = { cartItems: [] };
  const [state, dispatch] = useReducer(cartReducer, initialState);

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
