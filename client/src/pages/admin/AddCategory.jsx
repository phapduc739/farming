import { useState, useRef } from "react";
import { Upload } from "react-feather";
import axios from "axios";
import SuccessModal from "./SuccessModal";
import { useNavigate } from "react-router-dom";
import AdminDashboardLayout from "./AdminDashboardLayout";

const AddCategoryModal = ({ onClose, onUpdateCategories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const navigate = useNavigate();

  const [category, setCategory] = useState({
    name: "",
    description: "",
    image: "",
  });
  const [image, setImage] = useState(null);
  const imageInputRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCategory({
      ...category,
      [name]: value,
    });
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = async () => {
    window.history.back();
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/list/categories");
      setCategory(response.data);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách danh mục:", error);
    }
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
    if (!category.name || !category.description || !image) {
      const newErrors = {};
      if (!category.name) newErrors.name = "Vui lòng nhập tên danh mục.";
      if (!category.description) newErrors.description = "Vui lòng nhập mô tả.";
      if (!image) newErrors.image = "Vui lòng chọn ảnh danh mục.";
      setErrors(newErrors);
      return;
    }

    const formData = new FormData();
    formData.append("name", category.name);
    formData.append("description", category.description);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:4000/create/category",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // console.log(response.data.message);
      // setShowSuccessModal(true);
      // onUpdateCategories();

      // // Đóng modal
      // handleClose();
      navigate("/manage/categories");
    } catch (error) {
      console.error("Lỗi khi thêm danh mục:", error);
    }
  };

  const DefaultAvatar = "../../src/assets/images/blank-image.svg";

  return (
    <>
      {/* <button
        className="bg-primaryGreen flex justify-center items-center gap-2 rounded-[4px] py-[8px] px-[14px] text-white text-[14px] hover:bg-[#08886e] transition"
        onClick={handleOpen}
      >
        <i className="fa-solid fa-user-plus"></i>
        Thêm danh mục
      </button>
      <SuccessModal
        isOpen={showSuccessModal}
        onRequestClose={() => setShowSuccessModal(false)}
      />
      {isOpen && ( */}

      <AdminDashboardLayout>
        <div className="bg-white w-full h-[calc(100vh-40px)] p-6">
          <h2 className="text-xl font-bold mb-4">Thêm danh mục</h2>
          <form onSubmit={handleSubmit}>
            <div className="image-text grid grid-cols-1 gap-9">
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
                    <div className="text-red-500">{errors.image}</div>
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
                    <h3 className=""> Tên danh mục</h3>
                    <span className="text-red-500">*</span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nhập tên danh mục..."
                    value={category.name}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-4"
                  />
                  {errors.name && (
                    <div className="text-red-500">{errors.name}</div>
                  )}
                </label>

                <label
                  htmlFor="description"
                  className="flex flex-col gap-2 text-[14px]"
                >
                  <div className="flex gap-1">
                    <h3 className="">Mô tả</h3>
                    <span className="text-red-500">*</span>
                  </div>

                  <input
                    type="text"
                    name="description"
                    placeholder="Nhập mô tả..."
                    value={category.description}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-4"
                  />
                  {errors.description && (
                    <div className="text-red-500">{errors.description}</div>
                  )}
                </label>
              </div>

              <div className="btn flex justify-start">
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

export default AddCategoryModal;
