// Define action types
export const ADD_TO_CART = 'ADD_TO_CART';

// Action creator for adding an item to the cart
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
