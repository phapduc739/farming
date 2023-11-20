import { useState } from "react";
import axios from "axios";
import AdminDashboardLayout from "./AdminDashboardLayout";
import { useNavigate, useParams } from "react-router-dom";

const DeleteUser = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId: userId,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      // Gửi yêu cầu xóa danh mục dựa trên ID từ form
      await axios.delete(
        `http://localhost:4000/delete/user/${formData.userId}`
      );
      navigate("/manage/users");
      // Chuyển hướng sau khi xóa thành công

      console.log("xóa thành công");
    } catch (error) {
      console.error("Lỗi khi xóa danh mục:", error);
    }
  };

  const handleClose = () => {
    navigate("/manage/users");
  };

  return (
    <AdminDashboardLayout>
      <div className="bg-white w-full h-[calc(100vh-40px)] p-6">
        <h2 className="text-xl font-bold mb-4">Xóa người dùng</h2>
        <form onSubmit={handleDelete}>
          <input
            type="hidden"
            name="userId"
            value={formData.userId}
            onChange={handleInputChange}
          />
          <p>Bạn có chắc chắn muốn xóa người dùng này không?</p>
          <div className="btn flex justify-start mt-5">
            <button
              className="bg-red-500 text-white rounded-lg py-2 px-5"
              type="submit"
            >
              Xóa
            </button>
            <button
              className="bg-gray-200 text-gray-500 rounded-lg py-2 px-5 ml-2"
              onClick={handleClose}
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
    </AdminDashboardLayout>
  );
};

export default DeleteUser;
