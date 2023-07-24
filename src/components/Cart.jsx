// Cart.js
import React from "react";
import { useCart } from "../context/BasketContext";

const Cart = () => {
  const { cart, dispatch } = useCart();

  const handleRemoveFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  return (
    <div>
      <h2>Sepet</h2>
      <ul>
        {cart.cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price} TL{" "}
            <button onClick={() => handleRemoveFromCart(item.id)}>
              Sepetten Çıkar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
