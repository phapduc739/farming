import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// Import your actions
// Import các actions từ Redux
import {
  addMultipleToCart,
  updateQuantity,
} from "../../../../redux/actions/cartActions";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function ProductInfo({ history }) {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [products, setProducts] = useState(null);
  const [quantityErrors, setQuantityErrors] = useState({});
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const [quantity, setQuantity] = useState(
    products?.status === "Hết hàng" ? 0 : products?.quantity || 1
  );

  const navigate = useNavigate();
  const [maxQuantity, setMaxQuantity] = useState(); // Giả sử giá trị ban đầu là 1, có thể thay đổi tùy thuộc vào API.
  const [remainingQuantity, setRemainingQuantity] = useState(0);

  // Mặc định hiển thị ảnh từ sản phẩm đầu tiên
  useEffect(() => {
    if (products && products.images.length > 0) {
      const firstImage = products.images[0];
      const imageUrl = getImageUrl(firstImage);
      setSelectedImage(imageUrl);
      setQuantity(quantity || 1); // Sử dụng quantity thay vì products?.quantity
    }
  }, [products, quantity]);

  const handleImageClick = (imageId) => {
    const selectedImage = products.images.find((image) => image.id === imageId);
    if (selectedImage) {
      const imageUrl = getImageUrl(selectedImage);
      setSelectedImage(imageUrl);
    }
  };

  // Xử lý cập nhật số lượng
  const handleUpdateQuantity = (productId, quantityInCart) => {
    const selectedItem = items.find((item) => item.id === productId);

    if (selectedItem) {
      if (quantityInCart > selectedItem.quantity) {
        setQuantityErrors((prevErrors) => ({
          ...prevErrors,
          [productId]: "Bạn đã đặt quá số lượng có sẵn",
        }));
      } else {
        dispatch(updateQuantity(productId, quantityInCart));
        setQuantityErrors((prevErrors) => {
          const newErrors = { ...prevErrors };
          delete newErrors[productId];
          return newErrors;
        });

        // Cập nhật state quantity của component
        setQuantity(quantityInCart);
      }
    }
  };

  const getImageUrl = (image) => {
    if (image && typeof image === "object" && image.image_url) {
      return `http://localhost:4000/${image.image_url}`;
    } else if (typeof image === "string") {
      return `http://localhost:4000/${image}`;
    }
    return ""; // Hoặc trả về URL mặc định hoặc chuỗi trống tùy thuộc vào yêu cầu của bạn.
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/product/${id}`);
        setProducts(response.data);

        // Kiểm tra và cập nhật maxQuantity từ API
        const apiQuantity = parseInt(response.data.quantity, 10);
        if (apiQuantity > 0) {
          setMaxQuantity(apiQuantity);
        } else {
          setMaxQuantity(0);
          setQuantity(0); // Đặt số lượng là 0 nếu quantity từ API là 0
        }

        setRemainingQuantity(response.data.remainingQuantity);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [id]);

  const formatPrice = (price) => {
    const formattedPrice = Number(price).toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });

    return formattedPrice;
  };
  const handleAddToCart = () => {
    if (products && products.images && products.images.length > 0) {
      const selectedImage = getImageUrl(products.images[0]);
      const selectedQuantity = Math.min(quantity, maxQuantity);

      // Check if the product is already in the cart
      const existingCartItem = items.find((item) => item.id === products.id);

      // Calculate the maximum quantity that can be added to the cart
      let maxQuantityToAdd = maxQuantity;

      if (existingCartItem) {
        const remainingQuantity = maxQuantity - existingCartItem.quantityInCart;
        maxQuantityToAdd = Math.min(remainingQuantity, maxQuantity);
      }

      // Calculate the total quantity after adding to the cart
      const totalQuantityAfterAddition =
        (existingCartItem ? existingCartItem.quantityInCart : 0) +
        selectedQuantity;

      // Check and limit the quantity according to the specified rules
      if (maxQuantityToAdd <= 0 || totalQuantityAfterAddition > maxQuantity) {
        console.error("Số lượng trong giỏ hàng vượt quá số lượng có sẵn!");
        return;
      }

      // Dispatch an action to update the quantity
      dispatch(
        addMultipleToCart([
          {
            ...products,
            image_url: selectedImage,
            quantity: selectedQuantity,
          },
        ])
      );

      // Reset quantity to 1 after adding to the cart
      setQuantity(1);
    }
  };

  if (!products) {
    return <div>Đang tải...</div>;
  }
  const handleAddToCartAndProceed = () => {
    if (products && products.images && products.images.length > 0) {
      const selectedImage = getImageUrl(products.images[0]);
      const selectedQuantity = Math.min(quantity, maxQuantity);

      // Check if the product is already in the cart
      const existingCartItem = items.find((item) => item.id === products.id);

      // Calculate the maximum quantity that can be added to the cart
      let maxQuantityToAdd = maxQuantity;

      if (existingCartItem) {
        const remainingQuantity = maxQuantity - existingCartItem.quantityInCart;
        maxQuantityToAdd = Math.min(remainingQuantity, maxQuantity);
      }

      // Calculate the total quantity after adding to the cart
      const totalQuantityAfterAddition =
        (existingCartItem ? existingCartItem.quantityInCart : 0) +
        selectedQuantity;

      // Check and limit the quantity according to the specified rules
      if (maxQuantityToAdd <= 0 || totalQuantityAfterAddition > maxQuantity) {
        console.error("Số lượng trong giỏ hàng vượt quá số lượng có sẵn!");
        return;
      }

      // Dispatch an action to update the quantity
      dispatch(
        addMultipleToCart([
          {
            ...products,
            image_url: selectedImage,
            quantity: selectedQuantity,
          },
        ])
      );

      // Reset quantity to 1 after adding to the cart
      setQuantity(1);
    }

    if (isAuthenticated === true) {
      navigate("/cart");
    } else {
      navigate("/login/user");
    }
  };

  const handleIncreaseQuantity = () => {
    if (maxQuantity > 0) {
      // Tìm sản phẩm đang xem trong danh sách sản phẩm giỏ hàng
      const currentItem = items.find((item) => item.id === products.id);

      // Tính toán giới hạn tối đa có thể thêm vào giỏ hàng cho sản phẩm đang xem
      const remainingQuantityToAdd = currentItem
        ? Math.max(0, maxQuantity - currentItem.quantityInCart)
        : maxQuantity;

      // Tăng số lượng nhưng không vượt quá giới hạn tối đa
      setQuantity((prev) => Math.min(prev + 1, remainingQuantityToAdd));
    }
  };

  const handleDecreaseQuantity = () => {
    if (maxQuantity > 0) {
      setQuantity((prev) => Math.max(prev - 1, 1));
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4 border-b">
      {/* Phần hiển thị ảnh và thumbnail */}
      <div className="w-full flex gap-2" key={products.id}>
        <div className="relative px-2 image-thumbnails">
          {products.images.map((image) => (
            <div
              key={image.id}
              className={`mx-2 my-1 thumbnail ${
                selectedImage === getImageUrl(image) ? "selected" : ""
              }`}
              onClick={() => handleImageClick(image.id)}
            >
              <img
                src={getImageUrl(image)}
                className="w-20 h-20 object-cover rounded"
                alt={`Thumbnail ${image.id}`}
              />
            </div>
          ))}
        </div>
        <div className="relative mx-[10px] selected-image">
          {selectedImage && (
            <img
              src={selectedImage}
              style={{ width: "500px" }}
              alt="Ảnh đã chọn"
            />
          )}
        </div>
      </div>

      {/* Phần hiển thị thông tin sản phẩm */}
      <div className="relative">
        <div className="border-b py-8" key={products.id}>
          <h2 className="text-[24px] font-bold mb-[14px]">{products.name}</h2>
          <div>
            <span className="mb-4">
              <bdi className="font-[600] text-theme-color text-[18px]">
                {formatPrice(products.price)}
              </bdi>
            </span>
          </div>
          <div className="mt-4">
            <p className="font-normal leading-[1.5] text-[16px] ">
              {products.description}
            </p>
          </div>
        </div>

        {/* Phần chọn số lượng */}
        <div className="mb-5 py-5 border-b">
          <div className="flex mb-3 items-center">
            <h6 className="text-[16px] font-[400] mr-10">Định Lượng</h6>
            <div className="text-[16px] font-[400]">1 {products.unit}</div>
          </div>
          <div className="flex items-center">
            <h6 className="text-[16px] font-[400] mr-10">Số lượng</h6>
            <div className="relative flex items-center bg-them-gray px-1 h-[60px] py-1 w-[150px] rounded-xl">
              <label className="w-full text-center px-3 py-2 text-[14px]  ">
                {quantity}
              </label>
              <div className="absolute top-1/2 left-[10px] transform -translate-y-1/2 text-[14px] bg-white  rounded">
                <button
                  className={`relative w-full rounded-[50px] p-[12px] flex justify-center items-center gap-2 text-[16px] font-[400] hover:text-text2222 transition ${
                    products.status === "Hết hàng"
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={handleDecreaseQuantity}
                  disabled={products.status === "Hết hàng"}
                >
                  <i className="fa-solid fa-minus text-theme-color"></i>
                </button>
              </div>
              <div className="absolute right-[10px] top-1/2 transform -translate-y-1/2 text-[14px] bg-white  rounded ">
                <button
                  className={`relative w-full rounded-[50px] p-[12px] flex justify-center items-center gap-2 text-[16px] font-[400] hover:text-text2222 transition ${
                    products.status === "Hết hàng"
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={handleIncreaseQuantity}
                  disabled={products.status === "Hết hàng"}
                >
                  <i className="fa-solid fa-plus text-theme-color"></i>
                </button>
              </div>
              {quantityErrors[products.id] && (
                <p className="text-red-500 text-sm mt-1">
                  {quantityErrors[products.id]}
                </p>
              )}
            </div>
          </div>

          {/* Phần thêm vào giỏ hàng và mua ngay */}
          <div className="mb-5 py-5 border-b">
            <div className="flex gap-3 items-center">
              <div className="w-[250px] text-center px-4 hover:bg-theme-color py-3 text-[18px] rounded-xl border-2 border-theme-color">
                <button
                  className={`relative w-full   rounded-[50px] p-[8px] flex justify-center items-center gap-2 text-[18px] font-[500] hover:text-white transition ${
                    products.status === "Hết hàng"
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={() => handleAddToCart(products.id)}
                  disabled={products.status === "Hết hàng"}
                >
                  Thêm vào giỏ hàng
                </button>
              </div>

              <div className="w-[250px] text-center px-4 hover:bg-them-gray py-3   bg-theme-color rounded-xl border-2 border-theme-color">
                <button
                  className={`relative w-full rounded-[50px] p-[8px] text-white flex justify-center items-center gap-2 text-[18px] font-[500] hover:text-text2222 transition ${
                    products.status === "Hết hàng"
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={handleAddToCartAndProceed}
                  disabled={products.status === "Hết hàng"}
                >
                  Mua ngay
                </button>
              </div>
            </div>
          </div>

          {/* Phần hiển thị thông tin chi tiết */}
          <div>
            <table className="w-full">
              <tbody>
                <tr className="uppercase text-[16px] font-normal leading-normal ">
                  <td className="py-[10px] min-w-min[120px]">Mã hàng:</td>
                  <td className="text-text-black ">Skqf{products.id}</td>
                </tr>

                <tr className=" uppercase min-w-min[120px] text-[16px] font-normal leading-normal ">
                  <td className="py-[10px] min-w-min[120px]">Loại:</td>
                  <td className="text-text-black">{products.type}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
