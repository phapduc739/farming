import React, { useState } from "react";
import axios from "axios";
import AdminDashboardLayout from "./AdminDashboardLayout";
import { useNavigate, useParams } from "react-router-dom";

const DeleteCategory = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    categoryId: categoryId,
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
        `http://localhost:4000/delete/category/${formData.categoryId}`
      );

      // Chuyển hướng sau khi xóa thành công

      console.log("xóa thành công");
    } catch (error) {
      console.error("Lỗi khi xóa danh mục:", error);
    }
    navigate("/manage/categories");
  };

  const handleClose = () => {
    navigate("/manage/categories");
  };

  return (
    <AdminDashboardLayout>
      <div className="bg-white w-full h-[calc(100vh-40px)] p-6">
        <h2 className="text-xl font-bold mb-4">Xóa danh mục</h2>
        <form onSubmit={handleDelete}>
          <input
            type="hidden"
            name="categoryId"
            value={formData.categoryId}
            onChange={handleInputChange}
          />
          <p>Bạn có chắc chắn muốn xóa danh mục này không?</p>
          <div className="btn flex justify-start">
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

export default DeleteCategory;
