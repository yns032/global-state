import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function List() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Ürünler
        </a>
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
              <a className="nav-link active" aria-current="page" href="#"></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sepet
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Favori
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default List;
