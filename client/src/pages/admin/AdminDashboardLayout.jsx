import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userActions";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../../assets/images/logoweb.png";
import LogoAdmin from "../../assets/images/Logo-Admin.jpg";
import ManageUser from "./ManageUser";
import ManageCategory from "./ManageCategory";
import ManageProduct from "./ManageProduct";
import ManageOrder from "./ManageOrder";

function AdminDashboardLayout({ children }) {
  const { user, userId, email, role, accessToken } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Kiểm tra nếu không có accessToken hoặc userId, chuyển hướng đến trang đăng nhập
    if (!accessToken || !userId) {
      navigate("/login/admin");
    } else if (role !== "Admin") {
      navigate("/404"); // Chuyển hướng đến trang 404 nếu role không phải là admin
    }
  }, [user, userId, email, role, accessToken]);

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
    navigate("/login/admin");
  };

  return (
    <>
      <div className="header fixed top-0 left-0 flex w-full h-[60px] border-b-[1px]">
        <div className="logo flex justify-between items-center w-[260px] px-[12px]">
          <div className="flex justify-start items-center gap-2">
            <img className="w-[30px] h-[30px]" src={Logo} alt="" />
            <h1 className="text-[18px] text-primaryGreen font-bold">
              Admin<span className="text-textBlack">Dashboard</span>
            </h1>
          </div>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className="links-icon flex flex-1 justify-end items-center px-3">
          <div className="flex justify-center items-center gap-8 text-lightGray">
            <div className="">
              <i className="fa-regular fa-bell"></i>
            </div>
            <div className="">
              <i className="fa-solid fa-sliders"></i>
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="w-[30px] h-[30px] object-cover rounded-[50%]">
                <img
                  className="w-[30px] h-[30px] rounded-[50%]"
                  src={LogoAdmin}
                  alt=""
                />
              </div>
              <p className="text-[12px] text-textBlack font-bold">Admin</p>
              <i className="fa-solid fa-angle-down"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="main-body fixed top-[60px] flex w-full h-[calc(100vh-60px)] bg-lightGray">
        <div className="sidebar w-[260px] h-full bg-white px-3 py-3 border-r">
          <ul className="menu flex flex-col gap-2">
            <li className="item w-full rounded-r-[50px] text-[14px] font-medium bg-white text-textGray">
              <NavLink
                className={({ isActive }) => {
                  const activeClass = isActive
                    ? "bg-lightGreen text-primaryGreen"
                    : "";
                  return `${activeClass} py-3 flex justify-start items-center gap-3 px-3`;
                }}
                to="/admin/dashboard"
              >
                <i className="fa-solid fa-table-cells-large"></i>
                Dashboard
              </NavLink>
            </li>
            <li className="item w-full rounded-r-[50px] text-[14px] font-medium bg-white text-textGray">
              <NavLink
                className={({ isActive }) => {
                  const activeClass = isActive
                    ? "bg-lightGreen text-primaryGreen"
                    : "";
                  return `${activeClass} py-3 flex justify-start items-center gap-3 px-3`;
                }}
                to="/manage/users"
              >
                <i className="fa-regular fa-user"></i>
                Người dùng
              </NavLink>
            </li>
            <li className="item w-full rounded-r-[50px] text-[14px] font-medium bg-white text-textGray">
              <NavLink
                className={({ isActive }) => {
                  const activeClass = isActive
                    ? "bg-lightGreen text-primaryGreen"
                    : "";
                  return `${activeClass} py-3 flex justify-start items-center gap-3 px-3`;
                }}
                to="/manage/categories"
              >
                <i className="fa-solid fa-list"></i>
                Danh mục
              </NavLink>
            </li>
            <li className="item w-full rounded-r-[50px] text-[14px] font-medium bg-white text-textGray">
              <NavLink
                className={({ isActive }) => {
                  const activeClass = isActive
                    ? "bg-lightGreen text-primaryGreen"
                    : "";
                  return `${activeClass} py-3 flex justify-start items-center gap-3 px-3`;
                }}
                to="/manage/products"
              >
                <i className="fa-solid fa-boxes-stacked"></i>Sản phẩm
              </NavLink>
            </li>
            <li className="item w-full rounded-r-[50px] text-[14px] font-medium bg-white text-textGray">
              <NavLink
                className={({ isActive }) => {
                  const activeClass = isActive
                    ? "bg-lightGreen text-primaryGreen"
                    : "";
                  return `${activeClass} py-3 flex justify-start items-center gap-3 px-3`;
                }}
                to="/manage/orders"
              >
                <i className="fa-solid fa-dolly"></i>
                Đơn hàng
              </NavLink>
            </li>
            {/* <li className="item w-full rounded-r-[50px] text-[14px] font-medium bg-white text-textGray">
              <NavLink
                className={({ isActive }) => {
                  const activeClass = isActive
                    ? "bg-lightGreen text-primaryGreen"
                    : "";
                  return `${activeClass} py-3 flex justify-start items-center gap-3 px-3`;
                }}
                to="/statistics"
              >
                <i className="fa-solid fa-chart-line"></i>
                Thống kê
              </NavLink>
            </li> */}
            <li className="item w-full rounded-r-[50px] text-[14px] font-medium bg-white text-textGray">
              <NavLink className="py-3 flex justify-start items-center gap-3 px-3">
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                <button onClick={handleLogout}>Đăng xuất</button>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="content w-full">{children}</div>
      </div>
    </>
  );
}

export default AdminDashboardLayout;
