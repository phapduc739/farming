import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductInfo({ history }) {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState("");
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Mặc định hiển thị ảnh từ sản phẩm đầu tiên
  useEffect(() => {
    if (product && product.images.length > 0) {
      setSelectedImage(`http://localhost:4000/${product.images[0].image_url}`);
    }
  }, [product]);

  const handleImageClick = (imageId) => {
    const selectedImage = product.images.find((image) => image.id === imageId);
    if (selectedImage) {
      setSelectedImage(`http://localhost:4000/${selectedImage.image_url}`);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:4000/product/${id}`);
        const data = await response.json();
        const defaultQuantity = Math.max(parseInt(data.quantity, 10) || 1, 1);

        setProduct({ ...data, quantity: defaultQuantity });
        setQuantity(defaultQuantity);
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu sản phẩm:", error);
      }
    }

    fetchData();
  }, [id]);

  const formatPrice = (price) => {
    const formattedPrice = Number(price).toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });

    return formattedPrice;
  };

  const handleClickProduct = (action) => {
    if (action === "decrement" && quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      setProduct((prevProduct) => ({
        ...prevProduct,
        quantity: prevProduct.quantity - 1,
      }));
    } else if (action === "increment" && quantity < product.quantity) {
      setQuantity((prevQuantity) => prevQuantity + 1);
      setProduct((prevProduct) => ({
        ...prevProduct,
        quantity: prevProduct.quantity + 1,
      }));
    }

    console.log(
      "Sau khi cập nhật - Số lượng:",
      quantity,
      "Số lượng của sản phẩm:",
      product.quantity
    );
  };

  if (!product) {
    return <div>Đang tải...</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-4 border-b">
      <div className="w-full flex gap-2" key={product.id}>
        <div className="relative px-2 image-thumbnails">
          {product.images.map((image) => (
            <div
              key={image.id}
              className={`mx-2 my-1 thumbnail ${
                selectedImage === `http://localhost:4000/${image.image_url}`
                  ? "selected"
                  : ""
              }`}
              onClick={() => handleImageClick(image.id)}
            >
              <img
                src={`http://localhost:4000/${image.image_url}`}
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

      <div className="relative">
        <div className="border-b py-8" key={product.id}>
          <h2 className="text-[24px] font-bold mb-[14px]">{product.name}</h2>
          <div>
            <span className="mb-4">
              <bdi className="font-[600] text-theme-color text-[18px]">
                {formatPrice(product.price)}
              </bdi>
            </span>
          </div>
          <div className="mt-4">
            <p className="font-normal leading-[1.5] text-[16px] ">
              {product.description}
            </p>
          </div>
        </div>
        <div className="mb-5 py-5 border-b">
          <div className="flex mb-3 items-center">
            <h6 className="text-[16px] font-[400] mr-10">Định Lượng</h6>
            <div>{product.unit}</div>
          </div>
          <div className="flex items-center">
            <h6 className="text-[16px] font-[400] mr-10">Số lượng</h6>
            <div className="relative flex bg-them-gray px-1 py-1 w-[150px] rounded-xl">
              <label className="w-full text-center px-3 py-2 text-[14px] ">
                {product.quantity}
              </label>
              <div className="absolute top-1/2 left-[10px] transform -translate-y-1/2 text-[14px] bg-white px-[8px] py-[5px] rounded">
                <button
                  type="button"
                  onClick={() => handleClickProduct("decrement")}
                >
                  <i className="fa-solid fa-minus text-theme-color"></i>
                </button>
              </div>
              <div className="absolute right-[10px] top-1/2 transform -translate-y-1/2 text-[14px] bg-white px-[8px] py-[5px] rounded ">
                <button
                  type="button"
                  onClick={() => handleClickProduct("increment")}
                >
                  <i className="fa-solid fa-plus text-theme-color"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5 py-5 border-b">
          <form>
            <div className="flex gap-3">
              <div className="w-[250px] text-center px-4 py-3 text-[18px] rounded-xl border-2 border-theme-color">
                <button className="text-theme-color">Thêm vào giỏ hàng</button>
              </div>
              <div className="w-[250px] text-center px-4 py-3 text-[18px] rounded-xl bg-theme-color">
                <button className="text-white">Mua ngay</button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <table className="w-full">
            <tbody>
              <tr className="uppercase text-[16px] font-normal leading-normal ">
                <td className="py-[10px] min-w-min[120px]">Mã hàng:</td>
                <td className="text-text-black ">{product.code}</td>
              </tr>

              <tr className=" uppercase min-w-min[120px] text-[16px] font-normal leading-normal ">
                <td className="py-[10px] min-w-min[120px]">Loại:</td>
                <td className="text-text-black">{product.type}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
