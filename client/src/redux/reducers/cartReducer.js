// cartReducer.js
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
        // Nếu sản phẩm đã tồn tại trong giỏ hàng, cập nhật số lượng và giá thành
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  totalPrice: (item.quantity + 1) * item.price,
                }
              : item
          ),
        };
      } else {
        // Nếu sản phẩm chưa có trong giỏ hàng, thêm mới
        const newProduct = {
          ...action.payload,
          quantity: 1,
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
    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * item.price,
              }
            : item
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
