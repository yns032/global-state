// cartReducer.js
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log(action);
      return state;
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
