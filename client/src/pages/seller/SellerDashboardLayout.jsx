import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userActions";

import { useNavigate, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Logo from "../../assets/images/logoweb.png";
import LogoAdmin from "../../assets/images/Logo-Admin.jpg";
import Header from "../user/common/Header";
import Footer from "../user/common/Footer";

import ImgSeller from "../../assets/images/img-seller.jpg";
import ImgSeller2 from "../../assets/images/logo-seller2.png";

import IconHome from "../../assets/images/icon-home.svg";
import IconProduct from "../../assets/images/icon-product.svg";
import IconUser from "../../assets/images/icon-user.svg";
import IconSetting from "../../assets/images/icon-setting.svg";
import IconLogout from "../../assets/images/icon-logout.svg";
import axios from "axios";

export default function SellerDashboardLayout({ children }) {
  const { user, userId, email, role, accessToken } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    image: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Kiểm tra nếu không có accessToken hoặc userId, chuyển hướng đến trang đăng nhập
    if (!accessToken || !userId) {
      navigate("/login/seller");
    } else if (role !== "Seller") {
      navigate("/404"); // Chuyển hướng đến trang 404 nếu role không phải là admin
    }
  }, [user, userId, email, role, accessToken]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/user/${userId}`
        );
        const { name, email, image } = response.data;
        console.log(response.data);
        setUserInfo({ name, email, image });
        setSelectedImage(image);
      } catch (error) {
        console.error("Lỗi khi lấy thông tin danh mục:", error);
      }
    };

    fetchUser();
  }, [userId]);

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
    navigate("/login/seller");
  };
  return (
    <>
      <Header />
      <div className="flex w-full h-autp bg-white">
        <div className="w-[1280px] h-auto m-auto py-[45px] flex gap-6">
          <div className="sidebar rounded-[10px] w-[300px] h-full bg-backgroundLightGray border-r">
            <div className="logo-seller relative w-full h-[300px]">
              <img
                className="rounded-tl-[10px] rounded-tr-[10px] w-full h-[150px]"
                src={ImgSeller}
                alt=""
              />
              <div className="w-[104px] h-[104px] bg-white p-2 rounded-[50%] box-shadow-lg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                {" "}
                <img
                  className="w-full h-full object-cover rounded-[50%]"
                  src={`http://localhost:4000/${selectedImage}`}
                  alt=""
                />
              </div>
              <div className="mt-[60px] text-center">
                <h4 className="text-[21px] text-textBlack font-semibold">
                  {userInfo.name}
                </h4>
                <p className="text-[15px] text-textGray font-normal">
                  {userInfo.email}
                </p>
              </div>
            </div>
            <ul className="menu flex flex-col">
              <li className="item w-full text-[14px] font-medium bg-white text-textGray">
                <NavLink
                  className={({ isActive }) => {
                    const activeClass = isActive
                      ? "bg-lightGreen text-primaryGreen"
                      : "";
                    return `${activeClass} py-4 flex justify-start items-center gap-3 px-4`;
                  }}
                  to="/seller/dashboard"
                >
                  <img src={IconHome} alt="" />
                  Trang quản lý
                </NavLink>
              </li>
              <li className="item w-full text-[14px] font-medium bg-white text-textGray">
                <NavLink
                  className={({ isActive }) => {
                    const activeClass = isActive
                      ? "bg-lightGreen text-primaryGreen"
                      : "";
                    return `${activeClass} py-4 flex justify-start items-center gap-3 px-4`;
                  }}
                  to="/seller/manage-product"
                >
                  <img src={IconProduct} alt="" />
                  Sản phẩm
                </NavLink>
              </li>
              <li className="item w-full text-[14px] font-medium bg-white text-textGray">
                <NavLink
                  className={({ isActive }) => {
                    const activeClass = isActive
                      ? "bg-lightGreen text-primaryGreen"
                      : "";
                    return `${activeClass} py-4 flex justify-start items-center gap-3 px-4`;
                  }}
                  to="/seller/manage-order"
                >
                  <img src={IconProduct} alt="" />
                  Đơn hàng
                </NavLink>
              </li>
              <li className="item w-full text-[14px] font-medium bg-white text-textGray">
                <NavLink
                  className={({ isActive }) => {
                    const activeClass = isActive
                      ? "bg-lightGreen text-primaryGreen"
                      : "";
                    return `${activeClass} py-4 flex justify-start items-center gap-3 px-4`;
                  }}
                  to="/seller/profile"
                >
                  <img src={IconUser} alt="" />
                  Thông tin
                </NavLink>
              </li>
              <li className="item w-full text-[14px] font-medium bg-white text-textGray">
                <NavLink className="py-4 flex justify-start items-center gap-3 px-4">
                  <img className="mr-2" src={IconLogout} alt="" />
                  <button onClick={handleLogout}>Đăng xuất</button>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="content w-full flex-1">{children}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
