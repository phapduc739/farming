import React, { useState } from "react";
import { Upload } from "react-feather";

const AddUserModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleAddUser = () => {
    // Thực hiện logic để thêm người dùng vào hệ thống
    console.log("Thêm người dùng:", { name, email, role, selectedImage });

    // Đặt lại giá trị các trường và đóng popup
    setName("");
    setEmail("");
    setRole("");
    setSelectedImage(null);
    handleClose();
  };

  const DefaultAvatar = "../../src/assets/images/avatar-user.jpg";

  return (
    <>
      <button
        className="bg-primaryGreen flex justify-center items-center gap-2 rounded-[4px] py-[8px] px-[14px] text-white text-[14px] hover:bg-[#08886e] transition"
        onClick={handleOpen}
      >
        <i className="fa-solid fa-user-plus"></i>
        Thêm người dùng
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-500">
          <div className="bg-white w-[500px] rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Thêm người dùng</h2>

            <label htmlFor="" className="flex flex-col items-center">
              <div className="relative w-[125px] h-[125px] mb-4">
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Hình ảnh đã được thêm"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={DefaultAvatar}
                    alt="Hình ảnh mặc định"
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                  <label htmlFor="fileInput" className="cursor-pointer">
                    <Upload className="text-white w-6 h-6" />
                  </label>
                </div>
              </div>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="mb-4 hidden"
              />
            </label>

            <label htmlFor="">
              Họ và tên
              <input
                type="text"
                placeholder="Tên người dùng"
                value={name}
                onChange={handleNameChange}
                className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-4"
              />
            </label>

            <label htmlFor="">
              Địa chỉ Email
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-4"
              />
            </label>

            <label htmlFor="">
              Vai trò
              <select
                value={role}
                onChange={handleRoleChange}
                className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-4"
              >
                <option value="">Chọn vai trò</option>
                <option value="admin">Admin</option>
                <option value="seller">Seller</option>
                <option value="user">User</option>
              </select>
            </label>

            <div className="btn">
              <button
                className="bg-primaryGreen text-white rounded-lg py-2 px-4"
                onClick={handleAddUser}
              >
                Thêm
              </button>
              <button
                className="bg-red-500 text-white rounded-lg py-2 px-4 ml-2"
                onClick={handleClose}
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddUserModal;
