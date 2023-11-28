import React, { useState, useEffect } from "react";
import { Plus } from "react-feather";
import { NavLink } from "react-router-dom";
import {
  addToCart,
  socketUpdateQuantity,
} from "../../../../redux/actions/cartActions";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";

export default function ProductCategory({ selectedItem, history }) {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.items);
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:4000/all/product/category/${id}`
        );
        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu sản phẩm:", error);
      }
    }

    fetchData();
  }, [id]);
  useEffect(() => {
    const socket = io("http://localhost:4000");

    socket.on("quantity-update", (data) => {
      console.log("Received quantity update from server:", data);

      // Gửi action để cập nhật thông tin số lượng trong Redux store
      dispatch(socketUpdateQuantity(data));
    });

    return () => {
      socket.disconnect();
    };
  }, [dispatch]);
  const handleAddToCart = (productId) => {
    const selectedProduct = products.find(
      (product) => product.id === productId
    );
    if (selectedProduct) {
      // Dispatch action to add product to cart
      dispatch(addToCart(selectedProduct));
    }
  };

  const filteredAndSortedProducts = () => {
    let sortedProducts = [...products];

    switch (selectedItem) {
      case "Tất cả":
        // Không cần sắp xếp, trả về mảng sản phẩm nguyên thủy
        break;
      case "Thứ tự theo giá: từ thấp đến cao":
        sortedProducts.sort((a, b) => a.product_price - b.product_price);
        break;
      case "Thứ tự theo giá: cao thấp đến thấp":
        sortedProducts.sort((a, b) => b.product_price - a.product_price);
        break;
      // Thêm các case khác nếu cần thiết
      default:
        // Mặc định, không cần sắp xếp
        break;
    }

    console.log("selectedItem:", selectedItem);
    console.log("sortedProducts:", sortedProducts);

    return sortedProducts;
  };

  selectedItem;

  const formatPrice = (price) => {
    const formattedPrice = Number(price).toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });

    return formattedPrice;
  };

  const handleProductClick = (productId) => {
    console.log("productId:", productId);
    // Các thao tác khác ở đây
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-4 w-full">
        {filteredAndSortedProducts().map((product) => (
          <div
            key={product.id}
            className="px-3 py-3 bg-them-gray group hover:group"
          >
            <div className="relative flex justify-center items-center">
              <div className="w-[170px] h-[140px]">
                <img
                  className="w-full h-full  object-contain border "
                  src={`http://localhost:4000/${product.product_image_url}`}
                  alt={product.product_name}
                />
              </div>

              <div>
                <ul className="grid grid-cols-3 mt-2 right-0  absolute bg-white top-[80%] z-20 text-center px-[5px] py-[10px] w-full transition duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:visible -mb-[5px]">
                  <li>
                    <NavLink
                      to={`/product-detail/${product.product_id}`}
                      onClick={() => handleProductClick(product.product_id)}
                    >
                      <i className="fa-regular fa-eye"></i>
                    </NavLink>
                  </li>

                  <li className="z-30 relative group">
                    <i className="fa-solid fa-code-compare group hover:group"></i>
                  </li>
                  <li className="z-30 relative group">
                    <a className="notifi-wishlist">
                      <i className="fa-regular fa-heart"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="mb-2 text-[13px]">{product.category}</span>
              <h5 className="text-[16px] text-text2222 font-normal text-center">
                {product.product_name.length > 18
                  ? `${product.product_name.slice(0, 18)}...`
                  : product.product_name}{" "}
              </h5>
              <div className="w-full flex mb-2 gap-1 items-center justify-center">
                <div className="flex gap-1 ">
                  {[...Array(product.rating)].map((_, index) => (
                    <i
                      key={index}
                      className="fa-solid fa-star text-yellow text-[11px]"
                    ></i>
                  ))}
                </div>
                {/* <span className="text-[14px] text-gray-400 ml-1">
                  ({product.rating})
                </span> */}
              </div>
              <div className="flex gap-2 text-center items-center justify-center">
                <h5 className="">
                  <span className="text-[15px] text-primaryGreen font-[600]">
                    {formatPrice(product.product_price)}
                  </span>
                  <del className="text-[14px] text-textGray font-[400] line-through">
                    {product.discount}
                  </del>
                </h5>
              </div>

              <div className="flex justify-center items-center gap-2 mb-1">
                <h6
                  className={`text-[15px] text-center font-[600] ${
                    product.product_status === "Còn hàng"
                      ? "text-primaryGreen"
                      : "text-red-500"
                  }`}
                  style={{ flex: 1 }} // Thêm style flex: 1 để mở rộng theo chiều ngang
                >
                  {product.product_status === "Còn hàng"
                    ? `Còn hàng (${product.product_quantity} ${product.product_unit})`
                    : "Hết hàng"}
                </h6>
              </div>

              <div className="flex items-center">
                <button
                  className={`relative w-full bg-lineGray hover:bg-slate-200 rounded-[50px] p-[8px] flex justify-center items-center gap-2 text-[16px] font-[400] hover:text-text2222 transition ${
                    product.product_status === "Hết hàng"
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={() => handleAddToCart(product.id)}
                  disabled={product.product_status === "Hết hàng"}
                >
                  Thêm
                  <div className="absolute right-1 rounded-[50px] p-[7px] bg-white">
                    <Plus size={18} color="#0DA487" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
