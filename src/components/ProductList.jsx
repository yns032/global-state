import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/BasketContext";
import { FavoriteIcon } from "../common/Icons";

const ProductList = () => {
  const { dispatch } = useCart();
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
  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  const handleAddFavori = (product) => {
    dispatch({ type: "ADD_TO_FAVORITES", payload: product });
  };

  function typingStart(e) {
    const typingTimeOut = setTimeout(() => {
      setTyping(e.target.value);
    }, 500);
    return () => {
      clearTimeout(typing);
    };
  }

  async function getMovies() {
    const responce = await fetch("https://fakestoreapi.com/products");
    const data = await responce.json();
    const getData = data
      .filter((item) => item.title.includes(typing))
      .map((i) => {
        return {
          id: i.id,
          title: i.title,
          price: i.price,
          description: i.description,
          image: i.image,
        };
      });
    setMovieData(getData);
    console.log(responce);
  }

  useEffect(() => {
    getMovies();
  }, [typing]);

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
        <input
          onChange={typingStart}
          type="text"
          style={{}}
          placeholder="Search..."
        />
      </div>

      <div className="product-list">
        {movieData.map((product) => (
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
};

export default ProductList;
