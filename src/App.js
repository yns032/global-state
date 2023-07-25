import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart";
import { CartProvider } from "./context/BasketContext";
import { Coloria, ColoriaProvider, useColoria } from "./context/ColoriaContext";
import Layout from "./pages/Layout/Layout";
import List from "./pages/List";
import Sepet from "./components/sepet/Sepet";
import Favori from "./components/favori/Favori";
import Home from "./components/sepet/Home";

function BasketList(params) {
  const { state, dispatch } = useColoria();
  return <pre>{JSON.stringify(state, null, 2)}</pre>;
}

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <BrowserRouter>
          <List />
          <Routes>
            <Route element={<Layout />} />
            {/* <Route index element={<Home />} /> */}
            <Route path="/sepet" element={<Sepet />} />
            <Route path="/favori" element={<Favori />} />
          </Routes>
        </BrowserRouter>
      </nav>
      <CartProvider>
        <Home />
      </CartProvider>
    </div>
  );
}

export default App;
