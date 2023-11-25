const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingProduct = state.items.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        const newQuantityInCart = existingProduct.quantityInCart + 1;

        // Kiểm tra và xử lý logic vượt quá số lượng có sẵn ở đây
        if (newQuantityInCart > action.payload.quantity) {
          console.error("Số lượng trong giỏ hàng vượt quá số lượng có sẵn!");
          return state;
        }

        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  quantityInCart: newQuantityInCart,
                  totalPrice: newQuantityInCart * item.price,
                }
              : item
          ),
        };
      } else {
        const newProduct = {
          ...action.payload,
          quantityInCart: 1,
          totalPrice: action.payload.price,
        };

        return {
          ...state,
          items: [...state.items, newProduct],
        };
      }
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case "UPDATE_QUANTITY": {
      const { id, quantityInCart, quantity } = action.payload;
      const existingProduct = state.items.find((product) => product.id === id);

      if (existingProduct) {
        const newQuantityInCart = quantityInCart;

        if (newQuantityInCart > quantity) {
          console.error("Số lượng trong giỏ hàng vượt quá số lượng có sẵn!");
          return state;
        }

        return {
          ...state,
          items: state.items.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantityInCart: newQuantityInCart,
                  totalPrice: newQuantityInCart * item.price,
                }
              : item
          ),
        };
      }

      return state;
    }

    case "CLEAR_CART":
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
