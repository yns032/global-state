// Cart.js
import React from "react";
import { useCart } from "../context/BasketContext";

const Cart = () => {
  const { cart, dispatch } = useCart();

  const handleRemoveFromCart = (productId) => {
    debugger;
    const existingItem = cart.cartItems.find((item) => item.id === productId);

    if (existingItem) {
      if (existingItem.quantity > 1) {
        dispatch({ type: "REMOVE_FROM_CART", payload: productId });
      }
    }
  };

  const calculateTotalPrice = () => {
    return cart.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <h2>Sepet</h2>
      <ul>
        {cart.cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price} TL (x{item.quantity}){" "}
            <button onClick={() => handleRemoveFromCart(item.id)}>
              Sepetten Çıkar
            </button>
          </li>
        ))}
      </ul>
      <p>Toplam Tutar: {calculateTotalPrice()} TL</p>
    </div>
  );
};

export default Cart;
