// actions/cartActions.js

export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: productId,
  };
};

export const updateQuantity = (productId, quantityInCart, quantity) => {
  return {
    type: "UPDATE_QUANTITY",
    payload: {
      id: productId,
      quantityInCart,
      quantity,
    },
  };
};

export const socketUpdateQuantity = (data) => ({
  type: "SOCKET_UPDATE_QUANTITY",
  payload: data,
});
