import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartItemCount,
  getCartItems,
  getCartTotal,
  getUserId,
} from "../../../redux/selectors";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../redux/actions/userActions";
import IconVn from "../../../assets/images/vn.png";
import { ChevronDown } from "react-feather";
import Logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { PhoneCall } from "react-feather";
import { Heart } from "react-feather";
import { ShoppingCart } from "react-feather";
import { User } from "react-feather";
import { Zap } from "react-feather";
import ButtonAllCategory from "./ButtonAllCategory";
import SearchProduct from "./SearchProduct";
import LocationButton from "./LocationButton";

import { Home } from "react-feather";

export default function Header() {
  const cartItemCount = useSelector(getCartItemCount);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);

  const cartItems = useSelector(getCartItems);
  const cartTotal = useSelector(getCartTotal);
  const userId = useSelector(getUserId);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    return () => {
      // Cleanup when the component unmounts
      setIsHovered(false);
    };
  }, []);

  const formatPrice = (price) => {
    const formattedPrice = Number(price).toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });

    return formattedPrice;
  };

  const handleLogout = () => {
    // Xóa accessToken, userId và refreshToken khỏi localStorage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    localStorage.removeItem("refreshToken");

    // Dispatch action đăng xuất
    dispatch(logout());

    // Chuyển hướng đến trang đăng nhập
    navigate("/");
  };

  const handleProceedToCheckout = () => {
    if (isAuthenticated === true) {
      // Nếu đã đăng nhập, chuyển hướng đến trang thanh toán
      navigate("/checkout");
    } else {
      // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập
      navigate("/login/user");
    }
  };

  return (
    <>
      <div className="header w-full h-auto">
        {/* Header top */}
        <div className="header-top w-full h-[42px] bg-primaryGreen ">
          <div className="header-top-container w-[1280px] h-full m-auto flex justify-between items-center">
            <div className="header-top-left">
              <div className="map-pin flex justify-center items-center gap-1">
                <Home size={16} color="white" />
                <span className="text-[14px] text-white font-medium">
                  3/2, Ninh Kiều, Cần Thơ
                </span>
              </div>
            </div>
            <div className="header-top-right">
              <div className="select-language flex justify-center items-center gap-3">
                <img className="w-[20px] h-auto" src={IconVn} alt="VN" />
                <span className="text-[14px] text-white font-medium">
                  Vietnam
                </span>
                <ChevronDown name="down" size={16} color="white" />
              </div>
            </div>
          </div>
        </div>

        {/* Header center */}
        <div className="header-center w-full h-[100px]">
          <div className="header-center-container w-[1280px] h-full m-auto flex justify-between items-center">
            <div className="header-center-left">
              <Link to="/" className="logo">
                <img src={Logo} alt="" />
              </Link>
            </div>

            <div className="header-center-main flex justify-center items-center gap-[13px]">
              <LocationButton />
              <SearchProduct />
            </div>

            <div className="header-center-right flex justify-center item-center gap-[15px]">
              <Link>
                <PhoneCall name="phone" size={24} color="black" />
              </Link>
              |
              <Link>
                <Heart name="heart" size={24} color="black" />
              </Link>
              |
              <div
                className="relative group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* Biểu tượng giỏ hàng */}
                <ShoppingCart name="cart" size={24} color="black" />

                {/* Hiển thị số lượng sản phẩm và các nút khi giỏ hàng được hover */}
                <div
                  className={`absolute top-[-12px] left-[14px] w-[22px] h-[22px] flex justify-center items-center rounded-[4px] bg-secondaryRed group-hover:opacity-100 transition-opacity`}
                >
                  <span className="text-[12px] text-white font-semibold">
                    {cartItemCount}
                  </span>
                </div>

                {isHovered && (
                  <div className="absolute z-50 top-[26px] right-0 w-[300px] p-4 bg-white border rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                    {cartItems.map((item) => (
                      <Link
                        to={`/product/detail/${item.id}`}
                        key={item.id}
                        className="flex items-center mb-2"
                      >
                        <img
                          src={`http://localhost:4000/${
                            item.images && item.images.length > 0
                              ? item.images[0]
                              : ""
                          }`}
                          alt={item.name}
                          className="w-16 h-16 object-cover mr-2 border"
                        />
                        <div className="">
                          <p className="text-[16px] text-primaryGreen font-bold">
                            {item.name}
                          </p>
                          <p className="text-[14px] text-textGray font-[500]">
                            {item.quantity} {item.unit} x{" "}
                            {formatPrice(item.price)}
                          </p>
                        </div>
                      </Link>
                    ))}
                    <div className="flex justify-between items-center py-2 border-t border-b">
                      <p className="text-[16px] text-textGray font-medium">
                        Tổng tiền:
                      </p>
                      <p className="text-[18px] text-primaryGreen font-bold">
                        {formatPrice(cartTotal)}
                      </p>
                    </div>
                    <div className="flex justify-between mt-4">
                      <Link
                        to="/cart"
                        className="text-primaryGreen text-[16px] border-[2px] border-primaryGreen px-[12px] py-[6px] hover:bg-primaryGreen hover:text-white transition"
                      >
                        Giỏ hàng
                      </Link>
                      <Link
                        to={isAuthenticated ? "/checkout" : "/login/user"}
                        className="text-[16px] px-[12px] py-[6px] border-[2px] border-primaryGreen bg-primaryGreen hover:bg-[#097b64] text-white transition"
                        onClick={handleProceedToCheckout}
                      >
                        Thanh toán
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              |
              <div className="relative group">
                <Link>
                  <User name="cart" size={24} color="black" />
                </Link>

                {isAuthenticated ? (
                  <div className="user-options absolute top-full right-0 bg-white p-3 rounded-[5px] shadow-lg hidden opacity-0 group-hover:block group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-col gap-3 w-[120px]">
                      <Link
                        className="text-[14px] text-textGray hover:text-primaryGreen"
                        to={`/profile/user/${userId}`}
                      >
                        Hồ sơ cá nhân
                      </Link>
                      <Link
                        className="text-[14px] text-textGray hover:text-primaryGreen"
                        to="/order/user"
                      >
                        Đơn hàng
                      </Link>
                      <Link
                        className="text-[14px] text-textGray hover:text-primaryGreen"
                        to=""
                      >
                        <button onClick={handleLogout}>Đăng xuất</button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="user-options absolute top-full right-0 bg-white p-3 rounded-[5px] shadow-lg hidden opacity-0 group-hover:block group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-col gap-3 w-[120px]">
                      <Link
                        className="text-[14px] text-textGray hover:text-primaryGreen"
                        to="/login/user"
                      >
                        Đăng nhập
                      </Link>
                      <Link
                        className="text-[14px] text-textGray hover:text-primaryGreen"
                        to="/register/user"
                      >
                        Đăng ký
                      </Link>
                      <Link
                        className="text-[14px] text-textGray hover:text-primaryGreen"
                        to="/forgot-password"
                      >
                        Quên mật khẩu
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Header bottom */}
        <div className="header-bottom w-full h-[52px]">
          <div className="header-bottom-container w-[1280px] h-full m-auto flex justify-between items-center">
            <ButtonAllCategory />
            <div className="header-bottom-main">
              <ul className="flex justify-center items-center gap-5">
                <li className="text-[16px] text-[text2222] flex justify-center items-center font-medium">
                  Trang chủ
                  <ChevronDown size={20} color="#222222" />
                </li>
                <li className="text-[16px] text-[text2222] flex justify-center items-center font-medium">
                  Cửa hàng
                  <ChevronDown size={20} color="#222222" />
                </li>

                <li className="text-[16px] text-[text2222] flex justify-center items-center font-medium">
                  Nông sản
                  <ChevronDown size={20} color="#222222" />
                </li>

                <li className="text-[16px] text-[text2222] flex justify-center items-center font-medium">
                  Khuyến mãi
                  <ChevronDown size={20} color="#222222" />
                </li>

                <li className="text-[16px] text-[text2222] flex justify-center items-center font-medium">
                  Liên hệ
                  <ChevronDown size={20} color="#222222" />
                </li>
              </ul>
            </div>
            <div className="header-bottom-right">
              <button className="menu-list flex justify-start items-center gap-[15px] bg-lightGreen px-[28px] py-[14px] rounded-[5px]">
                <Zap size={24} color="#0DA487" />
                <span className="text-[18px] text-primaryGreen font-semibold">
                  Ưu đãi hôm nay
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
