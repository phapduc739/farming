import { useState, useRef } from "react";
import { Upload } from "react-feather";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminDashboardLayout from "./AdminDashboardLayout";

const AddUser = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
    role: "",
  });
  const [image, setImage] = useState(null);
  const imageInputRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleClose = async () => {
    window.history.back();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    // Xem trước hình ảnh
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra hợp lệ trước khi gửi yêu cầu
    if (!user.name || !user.email || !user.password || !user.role || !image) {
      const newErrors = {};
      if (!user.name) newErrors.name = "Vui lòng nhập tên người dùng.";
      if (!user.email) newErrors.email = "Vui lòng nhập email.";
      if (!user.password) newErrors.password = "Vui lòng nhập mật khẩu.";
      if (!user.role) newErrors.role = "Vui lòng nhập vai trò.";
      if (!image) newErrors.image = "Vui lòng chọn ảnh người dùng.";
      setErrors(newErrors);
      return;
    }

    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("role", user.role);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:4000/create/user",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data.message);
      navigate("/manage/users");
    } catch (error) {
      console.error("Lỗi khi thêm danh mục:", error);
    }
  };

  const DefaultAvatar = "../../src/assets/images/blank-image.svg";

  return (
    <>
      <AdminDashboardLayout>
        <div className="bg-white w-full h-[calc(100vh-40px)] p-6">
          <h2 className="text-xl font-bold mb-4">Thêm người dùng</h2>
          <form onSubmit={handleSubmit}>
            <div className="image-text h-[calc(100vh-130px)] pb-5 grid grid-cols-2 gap-9 overflow-y-scroll">
              <div className="image w-[300px] h-auto ">
                <h2 className="text-[18px] font-bold text-left">Hình ảnh</h2>

                <label htmlFor="" className="flex flex-col items-center">
                  <div className="relative w-[125px] h-[125px] border mb-4 rounded-[4px]">
                    {selectedImage ? (
                      <img
                        src={selectedImage}
                        alt="Hình ảnh đã được thêm"
                        className="w-full h-full object-cover rounded-[4px]"
                      />
                    ) : (
                      <img
                        src={DefaultAvatar}
                        alt="Hình ảnh mặc định"
                        className="w-full h-full object-cover rounded-[4px]"
                      />
                    )}

                    <div className="rounded-[4px] absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                      <label htmlFor="fileInput" className="cursor-pointer">
                        <Upload className="text-white w-6 h-6" />
                      </label>
                    </div>
                  </div>
                  <input
                    id="fileInput"
                    type="file"
                    accept="image/*"
                    ref={imageInputRef}
                    onChange={handleImageChange}
                    className="mb-4 hidden"
                  />
                  {errors.image && (
                    <div className="text-red-500 text-[12px]">
                      {errors.image}
                    </div>
                  )}
                </label>
                <p className="text-[12px] text-center">
                  Đặt hình ảnh thu nhỏ danh mục. Chỉ chấp nhận các tệp hình ảnh
                  *.png, *.jpg và *.jpeg
                </p>
              </div>

              <div className="text  w-full flex flex-col gap-5">
                <h2 className="text-[18px] font-bold text-left">Thông tin</h2>

                <label htmlFor="" className="flex flex-col gap-2 text-[14px]">
                  <div className="flex gap-1">
                    <h3 className=""> Tên người dùng</h3>
                    <span className="text-red-500">*</span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nhập tên người dùng..."
                    value={user.name}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-4"
                  />
                  {errors.name && (
                    <div className="text-red-500 text-[12px]">
                      {errors.name}
                    </div>
                  )}
                </label>

                <label htmlFor="" className="flex flex-col gap-2 text-[14px]">
                  <div className="flex gap-1">
                    <h3 className="">Địa chỉ email</h3>
                    <span className="text-red-500">*</span>
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Nhập địa chỉ email..."
                    value={user.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-4"
                  />
                  {errors.email && (
                    <div className="text-red-500 text-[12px]">
                      {errors.email}
                    </div>
                  )}
                </label>

                <label htmlFor="" className="flex flex-col gap-2 text-[14px]">
                  <div className="flex gap-1">
                    <h3 className="">Mật khẩu</h3>
                    <span className="text-red-500">*</span>
                  </div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Nhập mật khẩu..."
                    value={user.password}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-4"
                  />
                  {errors.password && (
                    <div className="text-red-500 text-[12px]">
                      {errors.password}
                    </div>
                  )}
                </label>

                <label htmlFor="" className="flex flex-col gap-2 text-[14px]">
                  <div className="flex gap-1">
                    <h3 className="">Vai trò</h3>
                    <span className="text-red-500">*</span>
                  </div>
                  <select
                    name="role"
                    value={user.role}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-4"
                  >
                    {" "}
                    <option value="">Chọn vai trò</option>
                    <option value="Seller">Seller</option>
                    <option value="User">User</option>
                  </select>
                  {errors.role && (
                    <div className="text-red-500 text-[12px]">
                      {errors.role}
                    </div>
                  )}
                </label>
              </div>

              <div className="btn flex justify-start h-[44px] ">
                <button
                  className="bg-primaryGreen text-white rounded-lg py-2 px-5"
                  type="submit"
                >
                  Thêm
                </button>
                <button
                  className="bg-gray-200 text-gray-500 rounded-lg py-2 px-5 ml-2"
                  onClick={handleClose}
                >
                  Đóng
                </button>
              </div>
            </div>
          </form>
        </div>
      </AdminDashboardLayout>
      {/* )} */}
    </>
  );
};

export default AddUser;
