import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/adminActions";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../../assets/images/Logo.png";
import LogoAdmin from "../../assets/images/Logo-Admin.jpg";
import ManageUser from "./ManageUser";
import ManageCategory from "./ManageCategory";
import ManageProduct from "./ManageProduct";
import ManageOrder from "./ManageOrder";

function AdminDashboard() {
  const [currentTab, setCurrentTab] = useState("dashboard");

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };
  // const { admin, email, accessToken, adminId } = useSelector(
  //   (state) => state.admin
  // );
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   // Kiểm tra nếu không có accessToken hoặc userId, chuyển hướng đến trang đăng nhập
  //   if (!accessToken || !adminId) {
  //     navigate("/login/admin");
  //   }
  // }, [accessToken, adminId, email, navigate]);

  const handleLogout = () => {
    // Xóa accessToken, userId và refreshToken khỏi localStorage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("adminId");
    localStorage.removeItem("email");
    localStorage.removeItem("refreshToken");

    // Dispatch action đăng xuất
    dispatch(logout());

    // Chuyển hướng đến trang đăng nhập
    navigate("/login/admin");
  };

  return (
    // <div>
    //   <p>Welcome admin {email}</p>

    //   <button onClick={handleLogout}>Logout</button>
    // </div>
    <>
      <div className="header flex w-full h-[60px] border-b-[1px]">
        <div className="logo flex justify-between items-center w-[260px] px-[12px]">
          <div className="flex justify-start items-center gap-2">
            <img className="w-[30px] h-[30px]" src={Logo} alt="" />
            <h1 className="text-[18px] text-primaryGreen font-bold">
              Admin<span className="text-textBlack">Dashboard</span>
            </h1>
          </div>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className="links-icon flex flex-1 justify-between items-center px-3">
          <div className="search flex justify-start items-center gap-2 px-6 py-2 bg-darkGray text-lightGray font-medium text-[12px] rounded-[50px]">
            <input
              className="bg-transparent outline-none"
              type="text"
              placeholder="Tìm kiếm..."
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
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

      <div className="main-body flex w-full h-[calc(100vh-60px)] bg-lightGray">
        <div className="sidebar w-[260px] h-full bg-white pr-3 py-3">
          <ul className="menu flex flex-col gap-2">
            <li className="item active w-full  bg-lightGreen rounded-r-[50px] text-[14px] text-primaryGreen font-bold">
              <Link
                className="flex justify-start items-center gap-3 px-3 py-3"
                to=""
              >
                <i className="fa-solid fa-table-cells-large"></i>
                Dashboard
              </Link>
            </li>
            <li
              className={`item w-full bg-white rounded-r-[50px] text-[14px] text-textGray font-medium ${
                currentTab === "users" ? "active" : ""
              }`}
            >
              <Link
                className="py-3 flex justify-start items-center gap-3 px-3"
                to="/manage/users"
                onClick={() => handleTabChange("users")}
              >
                <i className="fa-regular fa-user"></i>
                Người dùng
              </Link>
            </li>
            <li
              className={`item w-full bg-white rounded-r-[50px] text-[14px] text-textGray font-medium ${
                currentTab === "categories" ? "active" : ""
              }`}
            >
              <Link
                className="py-3 flex justify-start items-center gap-3 px-3"
                to="/manage/categories"
                onClick={() => handleTabChange("categories")}
              >
                <i className="fa-solid fa-list"></i>
                Danh mục
              </Link>
            </li>
            <li
              className={`item w-full bg-white rounded-r-[50px] text-[14px] text-textGray font-medium ${
                currentTab === "products" ? "active" : ""
              }`}
            >
              <Link
                className="py-3 flex justify-start items-center gap-3 px-3"
                to="/manage/products"
                onClick={() => handleTabChange("products")}
              >
                <i className="fa-solid fa-boxes-stacked"></i>Sản phẩm
              </Link>
            </li>
            <li
              className={`item w-full bg-white rounded-r-[50px] text-[14px] text-textGray font-medium ${
                currentTab === "orders" ? "active" : ""
              }`}
            >
              <Link
                className="py-3 flex justify-start items-center gap-3 px-3"
                to="/manage/orders"
                onClick={() => handleTabChange("orders")}
              >
                <i className="fa-solid fa-dolly"></i>
                Đơn hàng
              </Link>
            </li>
            <li
              className={`item w-full bg-white rounded-r-[50px] text-[14px] text-textGray font-medium ${
                currentTab === "statistics" ? "active" : ""
              }`}
            >
              <Link
                className="py-3 flex justify-start items-center gap-3 px-3"
                to="/statistics"
                onClick={() => handleTabChange("statistics")}
              >
                <i className="fa-solid fa-chart-line"></i>
                Thống kê
              </Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <ManageUser />
          {/* <ManageCategory />
          <ManageProduct />
          <ManageOrder /> */}
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
