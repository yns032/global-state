const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id, name, price } = action.payload;
      const checkItem = state.cartItems.find((item) => item.id === id);
      if (checkItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { id, name, price, quantity: 1 }],
        };
      }

    case "REMOVE_FROM_CART":
      const deletedId = action.payload;
      const checkDeleteItem = state.cartItems.find(
        (item) => item.id === deletedId
      );
      if (checkDeleteItem.quantity > 1) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === deletedId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.id !== deletedId),
        };
      }
    case "ADD_TO_FAVORITES":
      const newItem = action.payload;
      const checkFavoriteItem = state.favoriteItems.find(
        (item) => item.id === newItem.id
      );
      if (checkFavoriteItem) {
        return state; // If the item is already in favorites, return the current state.
      } else {
        return {
          ...state,
          favoriteItems: [...state.favoriteItems, newItem],
        };
      }

    default:
      return state;
  }
};

export default cartReducer;
