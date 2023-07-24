import "./App.css";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import { CartProvider } from "./context/BasketContext";
import { Coloria, ColoriaProvider, useColoria } from "./context/ColoriaContext";

function BasketList(params) {
  const { state, dispatch } = useColoria();
  return <pre>{JSON.stringify(state, null, 2)}</pre>;
}

function App() {
  return (
    <div className="App">
      <ColoriaProvider>
        <h1>Colorialar</h1>
        <Coloria id="coloria1" />
        <Coloria id="coloria2" />
        <Coloria id="coloria3" />
        <BasketList />
      </ColoriaProvider>
      <CartProvider>
        <h1>Sepet Uygulaması</h1>
        <ProductList />
        <Cart />
      </CartProvider>
    </div>
  );
}

export default App;
