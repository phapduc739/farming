// ShoppingCart.js
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../actions/cartActions";

const ShoppingCart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Tính tổng giá từ danh sách sản phẩm trong giỏ hàng
    const calculateTotalPrice = () => {
      let total = 0;
      items.forEach((item) => {
        total += item.price * item.quantity;
      });
      return total;
    };

    setTotalPrice(calculateTotalPrice());
  }, [items]);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    dispatch(updateQuantity(productId, newQuantity));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {items.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} - ${item.price * item.quantity} - Quantity:{" "}
            {item.quantity}
            <button onClick={() => handleRemoveFromCart(item.id)}>
              Remove
            </button>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => {
                handleUpdateQuantity(item.id, parseInt(e.target.value, 10));
              }}
            />
          </p>
        </div>
      ))}
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
};

export default ShoppingCart;
