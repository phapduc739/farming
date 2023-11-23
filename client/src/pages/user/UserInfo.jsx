import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "./common/Header";
import Fooder from "./common/Footer";

function UserInfo() {
  const { email, accessToken, userId } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Kiểm tra nếu không có accessToken hoặc userId, chuyển hướng đến trang đăng nhập
    if (!accessToken || !userId) {
      navigate("/login/user");
    }
  }, [accessToken, userId, email, navigate]);

  const handleLogout = () => {
    // Xóa accessToken, userId và refreshToken khỏi localStorage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    localStorage.removeItem("refreshToken");

    // Dispatch action đăng xuất
    dispatch(logout());

    // Chuyển hướng đến trang đăng nhập
    navigate("/login/user");
  };

  return (
    <>
      <Header />
      <p>Welcome {email}</p>

      <button onClick={handleLogout}>Logout</button>
      <Fooder />
    </>
  );
}

export default UserInfo;
