// CartItem.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
} from "../../../redux/actions/cartActions";

const CartItem = ({ id, name, price, quantity }) => {
  const dispatch = useDispatch();
  const [editedQuantity, setEditedQuantity] = useState(quantity);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setEditedQuantity(value);
  };

  const updateQuantityHandler = () => {
    dispatch(updateQuantity(id, editedQuantity));
  };

  const removeHandler = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <p>
        {name} - ${price} - Quantity:
        <input
          type="number"
          min="1"
          value={editedQuantity}
          onChange={handleQuantityChange}
        />
      </p>
      <button onClick={updateQuantityHandler}>Update Quantity</button>
      <button onClick={removeHandler}>Remove</button>
    </div>
  );
};

export default CartItem;
