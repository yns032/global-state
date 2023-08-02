import React, { useEffect, useState } from "react";
import { useCart } from "../context/BasketContext";
import axios from "axios";
import { FavoriteIcon } from "../common/Icons";

function Save() {
  const { dispatch, ...props } = useCart();
  console.log(props);
  const [products, setProducts] = useState([]);
  const [typing, setTyping] = useState(" ");
  const [movieData, setMovieData] = useState([]);

  // Ürünleri API'den çekmek için fetchProducts fonksiyonu
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Ürünler çekilirken bir hata oluştu:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const handleAddFavori = (product) => {
    dispatch({ type: "ADD_TO_FAVORITES", payload: product });
  };
  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="headertitle">
        <h2 style={{ textAlign: "center", margin: 16 }}>Ürün Listesi</h2>
      </div>

      <div className="product-list">
        {props?.cart?.favoriteItems?.map((product) => (
          <div
            key={product.id}
            style={{
              background: "#fff",
              shadow: "0 0 10px rgba(0,0,0,0.2)",
              position: "relative",
            }}
            className="w-full flex flex-col justify-center items-center flex-col border rounded-5 p-3"
          >
            <img
              src={product.image}
              style={{
                height: "140px",
                width: "120px",
                objectFit: "contain",
                margin: "0 auto",
                padding: 8,
              }}
              alt={product.title}
            />
            <textarea
              rows={2}
              style={{
                width: "80%",
                margin: "10px auto",
                resize: "none",
                overflow: "hidden",
                border: "none",
                outline: "none",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {product.title}
            </textarea>
            <textarea
              rows={3}
              style={{
                width: "80%",
                margin: "10px auto",
                resize: "none",
                overflow: "hidden",
                border: "none",
                outline: "none",
                textAlign: "center",
              }}
            >
              {product.description}
            </textarea>
            <p className="flex align-center justify-center">
              {product.price} TL
            </p>
            <div className="flex flex-row gap-4 align-center justify-center">
              <button
                className="btn-primary"
                onClick={() => handleAddToCart(product)}
              >
                Sepete Ekle
              </button>
              <FavoriteIcon
                size={32}
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  top: 30,
                  color: "#fa0",
                  right: 30,
                }}
                onClick={() => handleAddFavori(product)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Save;
