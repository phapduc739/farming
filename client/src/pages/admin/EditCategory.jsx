import { useState, useEffect, useRef } from "react";
import { Upload } from "react-feather";
import axios from "axios";
import AdminDashboardLayout from "./AdminDashboardLayout";
import { useParams, useNavigate } from "react-router-dom";

const EditCategory = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");
  const [errors, setErrors] = useState({});
  const [category, setCategory] = useState({
    name: "",
    description: "",
    image: "",
  });
  const [image, setImage] = useState(null);
  const imageInputRef = useRef();

  const { categoryId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        console.log("categoryId:", categoryId); // Đảm bảo giá trị của categoryId được log
        const response = await axios.get(
          `http://localhost:4000/category/${categoryId}`
        );
        const { name, description, image } = response.data;
        setCategory({ name, description, image });
        setSelectedImage(image);
      } catch (error) {
        console.error("Lỗi khi lấy thông tin danh mục:", error);
      }
    };

    fetchCategory();
  }, [categoryId]);

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

  const handleClose = async () => {
    window.history.back();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (image) {
      formData.append("image", image);
    }
    formData.append("name", category.name);
    formData.append("description", category.description);

    try {
      const response = await axios.put(
        `http://localhost:4000/edit/category/${categoryId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/manage/categories");
    } catch (error) {
      console.error("Lỗi khi cập nhật danh mục:", error);
    }
  };

  return (
    <>
      <AdminDashboardLayout>
        <div className="bg-white w-full h-[calc(100vh-40px)] p-6">
          <h2 className="text-xl font-bold mb-4">Chỉnh sửa danh mục</h2>
          <form onSubmit={handleSubmit}>
            <div className="image-text grid grid-cols-1 gap-9">
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
                    onChange={(e) =>
                      setCategory({ ...category, name: e.target.value })
                    }
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
                    onChange={(e) =>
                      setCategory({ ...category, description: e.target.value })
                    }
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
    </>
  );
};

export default EditCategory;
