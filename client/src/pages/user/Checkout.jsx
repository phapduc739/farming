import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Header from "../user/common/Header";
import Footer from "../user/common/Footer";

import { ShoppingCart } from "react-feather";

import { CreditCard } from "react-feather";

import discount from "../../assets/images/discount.svg";

import { clearCart } from "../../redux/actions/cartActions";

import axios from "axios";

const Checkout = () => {
  const items = useSelector((state) => state.cart.items);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const userId = useSelector((state) => state.user.userId);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(0);

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Tính tổng giá từ danh sách sản phẩm trong giỏ hàng
    const calculateTotalPrice = () => {
      let total = 0;
      items.forEach((item) => {
        total += item.price * item.quantityInCart;
      });
      return total;
    };

    setTotalPrice(calculateTotalPrice());
  }, [items]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        if (!isAuthenticated) {
          navigate("/login/user");
          return;
        }
        // Gọi API với userId từ Redux state
        const response = await axios.get(
          `http://localhost:4000/user/${userId}`
        );
        const data = response.data;

        // Set state với dữ liệu người dùng
        setUserInfo(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    // Gọi hàm fetchUserData khi component được render
    fetchUserInfo();
  }, [userId]);

  const formatPrice = (price) => {
    const formattedPrice = Number(price).toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });

    return formattedPrice;
  };

  const handleProceedToCheckout = async () => {
    try {
      // Gửi thông tin đặt hàng lên server
      const response = await axios.post("http://localhost:4000/orders", {
        userId: userInfo.id,
        customerName: userInfo.name,
        shippingAddress: userInfo.shipping_address,
        paymentMethod: "Thanh toán khi nhận hàng", // Có thể thay đổi theo cách bạn xử lý phương thức thanh toán
        totalPrice: totalPrice,
        status: "Đang xử lý",
        items: items.map((item) => ({
          productId: item.id,
          nameItem: item.name,
          quantity: item.quantityInCart,
          price: item.price * item.quantityInCart,
          unit: item.unit,
        })),
      });

      console.log(items);
      console.log(response);

      // Kiểm tra xem đặt hàng thành công hay không
      if (response.status === 200) {
        const orderId = response.data.orderId;
        dispatch(clearCart());
        navigate(`/order-success/${orderId}`);
      } else {
        console.error("Error placing order:", response.data);
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  // if (
  //   !userInfo ||
  //   !userInfo.shipping_address ||
  //   !userInfo.shipping_address.includes("Số điện thoại:")
  // ) {
  //   return null;
  // }

  // const [addressPart, phonePart] =
  //   userInfo.shipping_address.split("Số điện thoại:");

  return (
    <>
      <Header />
      <div className="checkout w-full h-auto border">
        <div className="checkout-title w-full bg-backgroundLightGray py-[38px] flex justify-between items-center">
          <div className="w-[1280px] m-auto flex justify-between items-center">
            <h2 className="text-[20px] text-textBlack font-bold">Thanh toán</h2>
            <div className="flex justify-center items-center gap-2 text-[14px] text-textBlack">
              <i className="fa-solid fa-house"></i>
              <i className="fa-solid fa-angle-right"></i>
              <p>Thanh toán</p>
            </div>
          </div>
        </div>

        <div className="checkout-info w-full h-auto">
          <div className="checkout-info-container w-[1280px] h-auto m-auto py-[48px] grid grid-cols-5 gap-x-6">
            {/*  */}
            <div className="checkout-item col-span-3 h-auto rounded-[5px]">
              <div className="flex flex-col gap-12">
                {/* Địa chỉ giao hàng */}
                <div className="address h-auto flex justify-start items-start gap-4">
                  <div className="w-[48px] h-[44px] flex justify-center items-center bg-backgroundLightGray rounded-[50%]">
                    <ShoppingCart size={22} color="#0DA487" />
                  </div>
                  <div className="flex flex-col gap-2 w-full px-6 py-3 bg-backgroundLightGray rounded-[5px]">
                    <h3 className="text-[17px] text-textBlack font-semibold">
                      Địa chỉ giao hàng
                    </h3>
                    <div className="relative w-[520px] flex justify-start items-start gap-4 shadow bg-white rounded-lg p-4">
                      <div className="">
                        <input checked type="checkbox" name="" id="" />
                      </div>
                      <div className=""></div>
                      <span className="absolute top-4 right-4 bg-primaryGreen text-white text-[12px] font-semibold px-[6px] py-[3px] rounded">
                        Mặc định
                      </span>
                    </div>
                  </div>
                </div>

                {/* Phương thức thanh toán */}
                <div className="payment h-auto flex justify-start items-start gap-4">
                  <div className="w-[48px] h-[44px] flex justify-center items-center bg-backgroundLightGray rounded-[50%]">
                    <CreditCard size={22} color="#0DA487" />
                  </div>
                  <div className="flex flex-col gap-2 w-full px-6 py-3 bg-backgroundLightGray rounded-[5px]">
                    <h3 className="text-[17px] text-textBlack font-semibold">
                      Phương thức thanh toán
                    </h3>
                    <div className="relative w-[520px] flex justify-start items-start gap-4 shadow bg-white rounded-lg p-4">
                      <div className="">
                        <input checked type="checkbox" name="" id="" />
                      </div>
                      <div className="">
                        <h1 className="text-[16px] text-textBlack font-semibold">
                          Thanh toán khi nhận hàng
                        </h1>
                        <p className="text-[12px] text-textGray font-normal">
                          Thanh toán an toàn và thuận lợi khi nhận hàng tại địa
                          chỉ <br /> mong muốn. Chỉ thanh toán khi bạn hài lòng
                          với sản phẩm.
                        </p>
                      </div>
                      <span className="absolute top-4 right-4 bg-primaryGreen text-white text-[12px] font-semibold px-[6px] py-[3px] rounded">
                        Mặc định
                      </span>
                    </div>

                    <div className="relative w-[520px] flex justify-start items-start gap-4 shadow bg-white rounded-lg p-4">
                      <div className="">
                        <input disabled type="checkbox" name="" id="" />
                      </div>
                      <div className="">
                        <h1 className="text-[16px] text-textBlack font-semibold">
                          Thanh toán qua ví điện tử
                        </h1>
                        <p className="text-[12px] text-textGray font-normal">
                          Thanh toán nhanh chóng và tiện lợi với ví điện tử. Sử
                          dụng <br /> ứng dụng ví để thanh toán mà không cần
                          mang theo tiền mặt.{" "}
                        </p>
                      </div>
                    </div>

                    <div className="relative w-[520px] flex justify-start items-start gap-4 shadow bg-white rounded-lg p-4">
                      <div className="">
                        <input disabled type="checkbox" name="" id="" />
                      </div>
                      <div className="">
                        <h1 className="text-[16px] text-textBlack font-semibold">
                          Thanh toán qua ngân hàng
                        </h1>
                        <p className="text-[12px] text-textGray font-normal">
                          Thanh toán an toàn và minh bạch thông qua chuyển khoản
                          ngân <br /> hàng. Nhận thông tin tài khoản ngân hàng
                          để chuyển khoản sau khi đặt hàng.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="cart-total col-span-2 flex flex-col gap-6 bg-backgroundLightGray h-auto px-[20px] py-[15px] rounded-[5px]">
              <div className="">
                <h3 className="text-[19px] text-textBlack font-medium">
                  Chi tiết đơn hàng
                </h3>
              </div>

              <div className="All-product flex flex-col gap-3">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center"
                  >
                    <div className="flex justify-center items-center gap-2">
                      <div className="img w-[70px] h-[70px] border rounded">
                        <img
                          src={`http://localhost:4000/${
                            item.images && item.images.length > 0
                              ? item.images[0].image_url || item.images[0]
                              : ""
                          }`}
                          alt={item.name}
                          className="w-16 h-16 object-cover mr-2 border"
                        />
                      </div>
                      <div className="flex justify-center items-center gap-2">
                        <p className="text-[15px] text-textGray font-[500]">
                          {item.name}
                        </p>
                        <p className="text-[15px] text-textGray font-normal">
                          X {item.quantityInCart} {item.unit}
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <p className="text-[15px] text-textGray font-[600]">
                        {formatPrice(item.quantityInCart * item.price)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="subtotal flex justify-between items-center">
                <h4 className="text-[17px] text-textGray font-medium">
                  Tổng thanh toán
                </h4>
                <h4 className="text-[17px] text-textGray font-medium">
                  {formatPrice(totalPrice)}
                </h4>
              </div>

              <div className="discount flex justify-between items-center">
                <h4 className="text-[17px] text-textGray font-medium">
                  Giảm giá
                </h4>
                <h4 className="text-[17px] text-textGray font-medium">
                  (-) 0đ
                </h4>
              </div>

              <div className="shipping flex justify-between items-center">
                <h4 className="text-[17px] text-textGray font-medium">
                  Phí vận chuyển
                </h4>
                <h4 className="text-[17px] text-textGray font-medium">0đ</h4>
              </div>

              <div className="total flex justify-between items-center">
                <h4 className="text-[18px] text-textGray font-semibold">
                  Tổng thanh toán
                </h4>
                <h4 className="text-[16px] text-primaryGreen font-semibold">
                  {formatPrice(totalPrice)}
                </h4>
              </div>

              {/* Cam kết chất lượng */}
              <div className="bg-backgroundLightGray flex flex-col gap-2">
                <div className="flex justify-start items-center gap-2">
                  <img className="w-[25px] h-[25px]" src={discount} alt="" />
                  <h4 className="text-textGray font-semibold">
                    Cam kết chất lượng
                  </h4>
                </div>
                <div className="px-3 flex flex-col gap-1">
                  <li className="text-[13px] text-textGray font-normal">
                    Mua sắm nông sản trực tuyến tại trang web của chúng tôi, bạn
                    sẽ được đảm bảo chất lượng và thông tin chi tiết về từng sản
                    phẩm.{" "}
                  </li>
                  <li className="text-[13px] text-textGray font-normal">
                    Trải nghiệm thanh toán của chúng tôi được thiết kế để đơn
                    giản và an toàn, mang lại sự thuận tiện cho khách hàng.{" "}
                  </li>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div
                  className="process-to-checkout bg-primaryGreen hover:bg-[#099579] transition px-[18px] py-[11px] rounded-[5px]"
                  onClick={handleProceedToCheckout}
                >
                  <Link
                    // to={isAuthenticated ? "/order-success" : "/login/user"}
                    className="w-full h-full text-[14px] text-white font-semibold flex justify-center items-center"
                  >
                    Đặt hàng ngay
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
