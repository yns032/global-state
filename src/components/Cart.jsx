import React from "react";
import { useCart } from "../context/BasketContext";

const Cart = () => {
  const { cart, dispatch } = useCart();

  const handleRemoveFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  const calculateTotalPrice = () => {
    return cart.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div
      style={{
        margin: "0 auto",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        width: "300px",
        background: "white",
        border: "2px solid yellow",
        borderRadius: "5px",
        marginTop: "10px",
      }}
    >
      <h2>Sepet</h2>

      <ul style={{ listStyle: "none", textAlign: "justify" }}>
        {cart.cartItems.map((item) => (
          <li
            key={item.id}
            style={{
              marginTop: "10px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "space-between", // Sola yaslamak için sola hizalama
              alignItems: "center", // Dikeyde ortalamak için dikey hizalama
            }}
          >
            {item.name} - {item.price} TL (x{item.quantity}){" "}
            <button
              className="sepetButon"
              onClick={() => handleRemoveFromCart(item.id)}
              style={{
                color: "white",
                backgroundColor: "#fa0",
                borderRadius: "5px",
                border: "1px solid yellow",
                marginRight: "10px",
              }}
            >
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
