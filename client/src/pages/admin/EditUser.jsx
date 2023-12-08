import { useState, useRef, useEffect } from "react";
import { Upload } from "react-feather";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AdminDashboardLayout from "./AdminDashboardLayout";
import logoUser from "../../assets/images/icon-user-logo.png";

const EditUser = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  const [errors, setErrors] = useState({});

  const { userId } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    status: "",
    image: "",
    role: "",
  });
  const [image, setImage] = useState(null);
  const imageInputRef = useRef();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        console.log("categoryId:", userId); // Đảm bảo giá trị của categoryId được log
        const response = await axios.get(
          `http://localhost:4000/user/${userId}`
        );
        const { name, email, image, role, status } = response.data;
        console.log(response.data);
        setUser({ name, email, image, role, status });
        setSelectedImage(image);
      } catch (error) {
        console.error("Lỗi khi lấy thông tin danh mục:", error);
      }
    };

    fetchUser();
  }, [userId]);

  const handleClose = async () => {
    window.history.back();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    // Assuming you're using FileReader to read the selected file
    const reader = new FileReader();

    reader.onloadend = () => {
      const imageDataUrl = reader.result;
      setPreviewImage(imageDataUrl);
      setImage(file); // Set the image file
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleStatusChange = (event) => {
    const status = event.target.value;
    setUser({ ...user, status });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("status", user.status);
    formData.append("role", user.role);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await axios.put(
        `http://localhost:4000/edit/user/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response); // Log phản hồi từ server

      if (response.status === 200) {
        // Xử lý khi thành công
        navigate("/manage/users");
      } else {
        // Xử lý khi thất bại
        console.error("Lỗi khi thêm danh mục:", response.data.error);
      }
    } catch (error) {
      console.error("Lỗi khi thêm danh mục:", error);
    }
  };

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
                    <img
                      src={
                        previewImage || `http://localhost:4000/${selectedImage}`
                      }
                      alt="Hình ảnh đã được thêm"
                      className="w-full h-full object-cover rounded-[4px]"
                    />

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
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
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
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
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
                    <h3 className="">Trạng thái</h3>
                    <span className="text-red-500">*</span>
                  </div>
                  <select
                    name="status"
                    value={user.status}
                    onChange={handleStatusChange}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-4"
                  >
                    <option value="">Chọn trạng thái</option>
                    <option value="Enable">Enable</option>
                    <option value="Disable">Disable</option>
                  </select>
                  {errors.status && (
                    <div className="text-red-500 text-[12px]">
                      {errors.status}
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
                    onChange={(e) => setUser({ ...user, role: e.target.value })}
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
                  className="bg-yellow text-white rounded-lg py-2 px-5"
                  type="submit"
                >
                  Lưu
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

export default EditUser;
