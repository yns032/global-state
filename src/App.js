import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./context/BasketContext";
import Layout from "./pages/Layout/Layout";
import Sepet from "./components/sepet/Sepet";
import Favori from "./components/favori/Favori";
import ProductList from "./components/ProductList";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<ProductList />} />
            <Route path="/sepet" element={<Sepet />} />
            <Route path="/favori" element={<Favori />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
