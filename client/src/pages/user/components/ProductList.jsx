import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Plus } from "react-feather";
import { addToCart } from "../../../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.items);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/list/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (productId) => {
    const selectedProduct = products.find(
      (product) => product.id === productId
    );
    if (selectedProduct) {
      // Dispatch action to add product to cart
      dispatch(addToCart(selectedProduct));
    }
  };

  const formatPrice = (price) => {
    const formattedPrice = Number(price).toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });

    return formattedPrice;
  };

  return (
    <>
      {products.map((product) => (
        <Link
          key={product.id}
          className="item-product w-full flex flex-col items-center gap-3 p-3 border hover:border-primaryGreen transition"
        >
          <div className="w-[170px] h-[140px]">
            <img
              className="w-full h-full object-cover border"
              src={`http://localhost:4000/${
                product.images && product.images.length > 0
                  ? product.images[0]
                  : ""
              }`}
              alt={product.name}
            />
          </div>

          <h5 className="text-[16px] text-text2222 font-normal">
            {product.name}
          </h5>
          <div className="flex justify-between items-center gap-2">
            <h6 className="text-[15px] text-primaryGreen font-[600]">
              {formatPrice(product.price)}
            </h6>
            <p className="text-[14px] text-textGray font-[400] line-through">
              10.000đ
            </p>
          </div>
          <div className="flex justify-between items-center gap-2">
            <div className="star text-[11px] text-yellow flex gap-1">
              {/* Thêm logic để hiển thị sao dựa trên product.rating */}
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <h6 className="text-[15px] text-primaryGreen font-[600]">
              {product.status ? "Còn hàng" : "Hết hàng"}
            </h6>
          </div>
          <button
            className="relative w-full bg-lineGray hover:bg-slate-200 rounded-[50px] p-[8px] flex justify-center items-center gap-2 text-[16px] text-textGray font-[400] hover:text-text2222 transition"
            onClick={() => handleAddToCart(product.id)}
          >
            Thêm
            <div className="absolute right-1 rounded-[50px] p-[7px] bg-white">
              <Plus size={18} color="#0DA487" />
            </div>
          </button>
        </Link>
      ))}
    </>
  );
};

export default ProductList;
