import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/userActions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function UserInfo() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login/user");
    }
  });

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/login/user");
  };

  return (
    <div>
      <p>Welcome {user.user.email}</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserInfo;
