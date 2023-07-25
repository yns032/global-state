import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/BasketContext";

const ProductList = () => {
  const { dispatch } = useCart();
  const [products, setProducts] = useState([]);

  // Ürünleri API'den çekmek için fetchProducts fonksiyonu
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Ürünler çekilirken bir hata oluştu:", error);
    }
  };

  // Belirli sayıda kelime almak için bir fonksiyon oluşturalım
  const getLimitedWords = (text, limit) => {
    const words = text.split(" ");
    return words.slice(0, limit).join(" ");
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div style={{ width: "100%" }}>
      <h2>Ürün Listesi</h2>
      <div
        style={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {products.map((product) => (
          <div key={product.id} style={{ width: "100%" }}>
            <img
              src={product.image}
              style={{
                height: "140px",
                width: "120px",
                objectFit: "cover",
                margin: "0 auto",
                padding: 8,
              }}
              alt="..."
            />

            <h5>{getLimitedWords(product.title, 3)}</h5>

            <p className="text">{product.description}</p>
            <div>
              <button onClick={() => handleAddToCart(product)}>
                Sepete Ekle
              </button>
              <button onClick={() => handleAddToCart(product)}>
                Favariler
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* <div
          style={{
            gap: 4,
            width: "100%",
            display: "grid",
            gridTemplate: "repeat(3, 1fr)",
          }}
        >
          {products.map((product) => (
            <div key={product.id}>
              <div>
                <img
                  src={product.image}
                  style={{
                    height: "140px",
                    width: "120px",
                    objectFit: "cover",
                    margin: "0 auto",
                    padding: 8,
                  }}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {getLimitedWords(product.title, 3)}
                  </h5>
                  {/* <p className="card-text" style={{ textOverflow: "ellipsis" }}>
                      {getLimitedWords(product.description, 10)}
                    </p> */}
      {/* <p
                    style={{
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {product.description}
                  </p>
                  <div className="container text-center">
                    {" "}
                    <button
                      className="col-md-4 border border-light-subtle"
                      onClick={() => handleAddToCart(product)}
                    >
                      Sepete Ekle
                    </button>
                    <button
                      className="col-md-4 offset-md-4 border border-light-subtle"
                      onClick={() => handleAddToCart(product)}
                    >
                      Favariler
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}
    </div>
  );
};

export default ProductList;
