import { useState, useRef, useEffect } from "react";
import { Upload } from "react-feather";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SellerDashboardLayout from "../../SellerDashboardLayout";
import { useParams } from "react-router-dom";

const EditOrder = () => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { orderId } = useParams();

  const [order, setOrder] = useState({
    customer_name: "",
    shipping_address: "",
    total_price: "",
    status: "",
    request: "",
    order_code: "",
    seller_name: "",
    orderItems: [],
  });

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/seller/order/${orderId}`
        );
        const orderData = response.data;

        setOrder({
          customer_name: orderData.customer_name,
          shipping_address: orderData.shipping_address,
          total_price: orderData.total_price,
          status: orderData.status,
          request: orderData.request,
          order_code: orderData.order_code,
          seller_name: orderData.seller_name,
          orderItems: orderData.orderItems,
        });
      } catch (error) {
        console.error("Lỗi khi lấy thông tin đơn hàng:", error);
      }
    };

    fetchOrder();
  }, [orderId]);

  const handleClose = async () => {
    // navigate("/seller/manage-product");
    console.log(order);
    console.log(order.status);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const status = order.status;

    try {
      const response = await axios.put(
        `http://localhost:4000/edit/order/${orderId}`,
        { status },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data.message);
      console.log(order);
      console.log(order.status);
      navigate("/seller/manage-order");
    } catch (error) {
      console.error("Lỗi khi cập nhật trạng thái:", error);
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
      <SellerDashboardLayout>
        <div className="bg-white rounded-[10px] w-full h-auto p-6">
          <h2 className="text-xl font-bold mb-4">Chỉnh sửa đơn hàng</h2>
          <form onSubmit={handleSubmit}>
            <div className="image-text h-auto pb-5">
              {/* <div className="image w-[300px] h-auto ">
                <h2 className="text-[18px] font-bold text-left">Hình ảnh</h2>

                <label
                  htmlFor=""
                  className="flex flex-col items-center  w-[600px]"
                >
                  <div className="flex gap-2 w-full">
                    {[...Array(4)].map((_, index) => (
                      <div
                        key={index}
                        className="relative w-[100px] h-[100px] border rounded-[4px]"
                      >
                        {index < previewImages.length ? (
                          <img
                            src={
                              previewImages[index] ||
                              (images[index]
                                ? `http://localhost:4000/${images[index].image_url}`
                                : DefaultAvatar)
                            }
                            alt={`Hình ảnh ${index + 1}`}
                            className="w-full h-full object-cover rounded-[4px]"
                          />
                        ) : (
                          <img
                            src={DefaultAvatar}
                            alt="Hình ảnh mặc định"
                            className="w-full h-full object-cover rounded-[4px]"
                          />
                        )}

                        <div className="rounded-[4px] absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                          <label htmlFor="fileInput" className="cursor-pointer">
                            <Upload className="text-white w-6 h-6" />
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>

                  <input
                    id="fileInput"
                    type="file"
                    accept="image/*"
                    ref={imageInputRef}
                    onChange={handleImageChange}
                    className="mb-4 hidden"
                    multiple
                  />
                  {errors.image && (
                    <div className="text-red-500 text-[12px]">
                      {errors.image}
                    </div>
                  )}
                </label>
                <p className="text-[12px] text-center mt-4">
                  Đặt hình ảnh thu nhỏ danh mục. Chỉ chấp nhận các tệp hình ảnh
                  *.png, *.jpg và *.jpeg
                </p>
              </div> */}

              <div className="text  w-full flex flex-col">
                <h2 className="text-[18px] font-bold text-left">Thông tin</h2>

                <label htmlFor="" className="flex flex-col gap-2 text-[14px]">
                  <div className="flex gap-1">
                    <h3 className="">Tên người bán</h3>
                    <span className="text-red-500">*</span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nhập tên sản phẩm..."
                    value={order.seller_name}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-4"
                  />
                  {errors.name && (
                    <div className="text-red-500 text-[12px]">
                      {errors.name}
                    </div>
                  )}
                </label>

                <label htmlFor="" className="flex flex-col gap-2 text-[14px]">
                  <div className="flex gap-1">
                    <h3 className="">Tên khách hàng</h3>
                    <span className="text-red-500">*</span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nhập tên sản phẩm..."
                    value={order.customer_name}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-4"
                  />
                  {errors.name && (
                    <div className="text-red-500 text-[12px]">
                      {errors.name}
                    </div>
                  )}
                </label>

                <label htmlFor="" className="flex flex-col gap-2 text-[14px]">
                  <div className="flex gap-1">
                    <h3 className="">Địa chỉ giao hàng</h3>
                    <span className="text-red-500">*</span>
                  </div>
                  <input
                    type="text"
                    name="description"
                    placeholder="Nhập mô tả sản phẩm..."
                    value={order.shipping_address}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-4"
                  />
                  {errors.description && (
                    <div className="text-red-500 text-[12px]">
                      {errors.description}
                    </div>
                  )}
                </label>

                <label htmlFor="" className="flex flex-col gap-2 text-[14px]">
                  <div className="flex gap-1">
                    <h3 className="">Tổng tiền</h3>
                    <span className="text-red-500">*</span>
                  </div>
                  <input
                    type="number"
                    name="quantity"
                    placeholder="Nhập số lượng sản phẩm..."
                    value={order.total_price}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-4"
                  />
                  {errors.quantity && (
                    <div className="text-red-500 text-[12px]">
                      {errors.quantity}
                    </div>
                  )}
                </label>

                <label htmlFor="" className="flex flex-col gap-2 text-[14px]">
                  <div className="flex gap-1">
                    <h3 className="">Mã đơn hàng</h3>
                    <span className="text-red-500">*</span>
                  </div>
                  <input
                    type="text"
                    name="price"
                    placeholder="Nhập giá sản phẩm..."
                    value={order.order_code}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-4"
                  />
                  {errors.price && (
                    <div className="text-red-500 text-[12px]">
                      {errors.price}
                    </div>
                  )}
                </label>

                <label htmlFor="" className="flex flex-col gap-2 text-[14px]">
                  <div className="flex gap-1">
                    <h3 className="">Trạng thái</h3>
                    <span className="text-red-500">*</span>
                  </div>
                  <select
                    name="status"
                    value={order.status}
                    onChange={(e) =>
                      setOrder({ ...order, status: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-4"
                  >
                    <option value="">Chọn trạng thái</option>
                    <option value="Đang xử lý">Đang xử lý</option>
                    <option value="Đã giao cho shipper">
                      Đã giao cho shipper
                    </option>
                    <option value="Đã hủy">Đã hủy</option>
                  </select>
                  {errors.unit && (
                    <div className="text-red-500 text-[12px]">
                      {errors.unit}
                    </div>
                  )}
                </label>
              </div>

              <div className="btn flex justify-start h-[44px] ">
                <button
                  className="bg-yellow text-white rounded-lg py-2 px-5"
                  type="submit"
                >
                  Lưu
                </button>
                <button
                  className="bg-gray-200 text-gray-500 rounded-lg py-2 px-5 ml-2"
                  onClick={handleClose}
                >
                  Đóng
                </button>
              </div>
            </div>
          </form>
        </div>
      </SellerDashboardLayout>
      {/* )} */}
    </>
  );
};

export default EditOrder;
