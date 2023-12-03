import React, { useState, useEffect } from "react";
import { Plus } from "react-feather";
import { NavLink } from "react-router-dom";
import { addToCart } from "../../../../redux/actions/cartActions";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

// Định nghĩa component ProductCategory
export default function ProductCategory({ selectedItem, history }) {
  // State và Redux hooks
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.items);
  const { id } = useParams();
  const removeDuplicates = (arr) => {
    const uniqueProducts = arr.reduce((acc, current) => {
      const x = acc.find((item) => item.product_id === current.product_id);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
    return uniqueProducts;
  };
  // Lấy danh sách sản phẩm dựa trên ID danh mục
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/all/product/category/${id}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách sản phẩm:", error);
      }
    };

    fetchProducts();
  }, [id]);

  // Xử lý thêm sản phẩm vào giỏ hàng
  const handleAddToCart = async (productId) => {
    try {
      // Lấy thông tin sản phẩm được chọn
      const response = await axios.get(
        `http://localhost:4000/product/${productId}`
      );
      const selectedProduct = response.data;

      // Kiểm tra nếu sản phẩm được chọn có hình ảnh
      if (
        selectedProduct &&
        selectedProduct.images &&
        selectedProduct.images.length > 0
      ) {
        // Lấy URL của hình ảnh đầu tiên
        const selectedImage = getImageUrl(selectedProduct.images[0]);

        // Gửi action addToCart với thông tin sản phẩm và URL hình ảnh
        dispatch(addToCart({ ...selectedProduct, image_url: selectedImage }));
      }
    } catch (error) {
      console.error("Lỗi khi lấy thông tin sản phẩm:", error);
    }

    // Log trạng thái hiện tại của danh sách sản phẩm
    console.log(products);
  };

  // Hàm lấy URL của hình ảnh
  const getImageUrl = (image) => {
    if (image && typeof image === "object" && image.image_url) {
      return `http://localhost:4000/${image.image_url}`;
    } else if (typeof image === "string") {
      return `http://localhost:4000/${image}`;
    }
    return ""; // Trả về URL mặc định hoặc chuỗi trống tùy thuộc vào yêu cầu
  };

  // Hàm lọc và sắp xếp sản phẩm dựa trên mục đã chọn
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
      // Thêm các trường hợp khác nếu cần thiết
      default:
        // Mặc định, không cần sắp xếp
        break;
    }

    console.log("Mục đã chọn:", selectedItem);
    console.log("Sản phẩm đã sắp xếp:", sortedProducts);
    // Loại bỏ sản phẩm trùng lặp dựa trên product_id
    sortedProducts = removeDuplicates(sortedProducts);
    return sortedProducts;
  };

  // Hàm định dạng giá với đơn vị tiền tệ
  const formatPrice = (price) => {
    const formattedPrice = Number(price).toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });

    return formattedPrice;
  };

  // Xử lý khi nhấp vào một sản phẩm để xem chi tiết
  const handleProductClick = (productId) => {
    console.log("ID sản phẩm:", productId);
    // Các hành động bổ sung có thể được thêm vào đây
    window.scrollTo(0, 0);
  };

  // Render component
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
                  className="w-full h-full object-contain border"
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
                  className={`relative w-full bg-lineGray hover:bg-them-gray rounded-[50px] p-[8px] flex justify-center items-center gap-2 text-[16px] font-[400] hover:text-text2222 transition ${
                    product.product_status === "Hết hàng"
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={() => handleAddToCart(product.product_id)}
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
