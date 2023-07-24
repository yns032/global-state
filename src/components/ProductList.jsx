// ProductList.js
import React from "react";
import { useCart } from "../context/BasketContext";

const products = [
  { id: 1, name: "Ürün 1", price: 10 },
  { id: 2, name: "Ürün 2", price: 20 },
  { id: 3, name: "Ürün 3", price: 30 },
];

const ProductList = () => {
  const { dispatch } = useCart();

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div>
      <h2>Ürün Listesi</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} TL{" "}
            <div onClick={() => handleAddToCart(product)}>Sepete Ekle</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
