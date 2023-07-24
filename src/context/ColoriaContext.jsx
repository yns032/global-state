import React, { createContext, useContext, useReducer, useState } from "react";

// Renk ve enerji durumu için başlangıç değeri
const initialColoriaState = {
  colors: {
    coloria1: "Kırmızı",
    coloria2: "Mavi",
    coloria3: "Yeşil",
  },
  basket: {
    items: [],
  },
};

// Renk ve enerji durumunu güncelleyen reducer
const coloriaReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_COLOR":
      return {
        ...state,
        colors: {
          ...state.colors,
          [action.coloriaId]: action.newColor,
        },
      };
    case "BASKET_NEWITEM": //sepet,favori
      return {
        ...state,
        basket: {
          ...state.basket,
          items: action.data,
        },
      };
    default:
      return state;
  }
};

// Renk ve enerji durumu için Context oluşturulması
const ColoriaContext = createContext();

// Renk ve enerji durumu sağlayıcısı
export const ColoriaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(coloriaReducer, initialColoriaState);

  return (
    <ColoriaContext.Provider value={{ state, dispatch }}>
      {children}
    </ColoriaContext.Provider>
  );
};

// Renk ve enerji durumuna erişmek için özel bir kancanın kullanılması
export const useColoria = () => {
  const context = useContext(ColoriaContext);
  if (!context) {
    throw new Error("useColoria must be used within a ColoriaProvider");
  }
  return context;
};

const colors = ["Kırmızı", "Mavi", "Yeşil", "Sarı", "Turuncu"];
// Renk ve enerji durumunu kullanacak olan Renkli Coloria bileşeni
export const Coloria = ({ id }) => {
  const [error, setError] = useState(false);
  const { state, dispatch } = useColoria();
  const color = state.colors[id];

  const handleChangeColor = () => {
    // Yeni rastgele bir renk seçme işlemi (burada örnek olduğu için rastgele renkler oluşturuyoruz)
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    alert(`${id}-${randomColor}`);
    // Renk ve enerji durumunu güncellemek için reducer'a aksiyon gönderme
    dispatch({ type: "UPDATE_COLOR", coloriaId: id, newColor: randomColor });
  };
  const handleChangeColorName = (newColorName) => {
    const colorItem = colors.find((color) => color === newColorName);
    console.log({ colorItem });
    if (colorItem === undefined) {
      setError(true);
      //return;
    } else {
      setError(false);
    }
    dispatch({ type: "UPDATE_COLOR", coloriaId: id, newColor: newColorName });
  };

  const handleGetData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "BASKET_NEWITEM",
          data: data,
        });
      });
  };

  return (
    <div>
      <h2>Coloria-{id}</h2>
      <p>Rengi: {color}</p>
      <button onClick={handleChangeColor}>Renk Değiştir</button>
      <input
        type="text"
        value={color}
        style={{
          border: error ? "1px solid red" : "1px solid blue",
        }}
        onChange={(e) => handleChangeColorName(e.target.value)}
      />
      {error && "hata var"}
      <select onChange={(e) => handleChangeColorName(e.target.value)}>
        {colors.map((color, index) => {
          return <option key={index}>{color}</option>;
        })}
      </select>
      <button onClick={handleGetData}>Verileri Getir</button>
    </div>
  );
};
