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

    default:
      return state;
  }
};

export default cartReducer;
