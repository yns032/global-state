import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/BasketContext";
function Header() {
  const { cart } = useCart();

  const calculateTotalPrice = () => {
    return cart.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        borderBottom: "1px solid #ddd",
      }}
      className="navbar navbar-expand-lg bg-body-tertiary"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="navbar-brand" to="/sepet">
                Sepet
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand" to="/favori">
                Favori
              </Link>
            </li>
          </ul>
        </div>
        ({cart.cartItems.length}) - {calculateTotalPrice().toFixed(2)} TL
      </div>
    </nav>
  );
}

export default Header;
