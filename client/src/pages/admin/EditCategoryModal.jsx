import React, { useState, useEffect, useRef } from "react";
import { Upload } from "react-feather";
import axios from "axios";

const EditCategoryModal = ({ categoryId, onUpdateCategories }) => {
  const [isOpen, setIsOpen] = useState(false);
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

  useEffect(() => {
    const fetchCategory = async () => {
      try {
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

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra hợp lệ trước khi gửi yêu cầu
    if (!category.name || !category.description) {
      const newErrors = {};
      if (!category.name) newErrors.name = "Vui lòng nhập tên danh mục.";
      if (!category.description) newErrors.description = "Vui lòng nhập mô tả.";
      setErrors(newErrors);
      return;
    }

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
      console.log(response.data.message);
      setIsOpen(false);
      onUpdateCategories();

      console.log(category);
    } catch (error) {
      console.error("Lỗi khi cập nhật danh mục:", error);
    }
  };

  return (
    <>
      <button
        className="bg-primaryGreen flex justify-center items-center gap-2 rounded-[4px] py-[8px] px-[14px] text-white text-[14px] hover:bg-[#08886e] transition"
        onClick={handleOpen}
      >
        Chỉnh sửa
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-500">
          <div className="bg-white w-[500px] rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Chỉnh sửa danh mục</h2>
            <form onSubmit={handleSubmit}>
              <label className="flex flex-col items-center">
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
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
              {errors.name && <p className="text-red-500">{errors.name}</p>}
              <label className="block mb-4">
                <span className="text-gray-700">Tên danh mục</span>
                <input
                  type="text"
                  value={category.name}
                  onChange={(e) =>
                    setCategory({ ...category, name: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primaryGreen focus:ring focus:ring-primaryGreen focus:ring-opacity-50"
                />
              </label>
              {errors.description && (
                <p className="text-red-500">{errors.description}</p>
              )}
              <label className="block mb-4">
                <span className="text-gray-700">Mô tả</span>
                <textarea
                  value={category.description}
                  onChange={(e) =>
                    setCategory({ ...category, description: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primaryGreen focus:ring focus:ring-primaryGreen focus:ring-opacity-50"
                />
              </label>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2"
                  onClick={handleClose}
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="bg-primaryGreen text-white px-4 py-2 rounded-lg"
                >
                  Lưu
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditCategoryModal;
