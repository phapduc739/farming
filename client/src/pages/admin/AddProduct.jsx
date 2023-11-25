import { useState, useRef, useEffect } from "react";
import { Upload } from "react-feather";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminDashboardLayout from "./AdminDashboardLayout";

import { useSelector } from "react-redux/es/hooks/useSelector";

const AddProduct = () => {
  const userId = useSelector((state) => state.user.userId);

  const [selectedImage, setSelectedImage] = useState(null);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  const [images, setImages] = useState([]);

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    unit: "",
    quantity: "",
    rating: "",
    status: "",
    categoryID: "",
  });
  const [image, setImage] = useState(null);
  const imageInputRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleClose = async () => {
    window.history.back();
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    const imageArray = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      imageArray.push(file);

      // Xem trước hình ảnh
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }

    setImages(imageArray);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra hợp lệ trước khi gửi yêu cầu
    if (
      !product.name ||
      !product.description ||
      !product.price ||
      !product.unit ||
      !product.quantity ||
      !product.categoryID
      // !image
    ) {
      const newErrors = {};
      if (!product.name) newErrors.name = "Vui lòng nhập tên sản phẩm.";
      if (!product.description)
        newErrors.description = "Vui lòng nhập mô tả sản phẩm.";
      if (!product.price) newErrors.price = "Vui lòng nhập giá sản phẩm.";
      if (!product.unit) newErrors.unit = "Vui lòng chọn đơn vị tính sản phẩm.";
      if (!product.quantity)
        newErrors.quantity = "Vui lòng nhập số lượng sản phẩm.";
      if (!product.categoryID)
        newErrors.categoryID = "Vui lòng chọn danh mục sản phẩm.";

      // if (!images.length)
      //   newErrors.image = "Vui lòng chọn ít nhất một ảnh sản phẩm.";
      // setErrors(newErrors);
      return;
    }

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("unit", product.unit);
    formData.append("quantity", product.quantity);
    formData.append("categoryID", product.categoryID);
    formData.append("userId", userId);
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
    try {
      const response = await axios.post(
        "http://localhost:4000/create/product",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data.message);
      navigate("/manage/products");
    } catch (error) {
      console.error("Lỗi khi thêm danh mục:", error);
    }
  };

  useEffect(() => {
    // Truy vấn danh sách danh mục từ cơ sở dữ liệu
    axios.get("http://localhost:4000/list/categories").then((response) => {
      setCategories(response.data);
    });
  }, []);

  const DefaultAvatar = "../../src/assets/images/blank-image.svg";

  return (
    <>
      <AdminDashboardLayout>
        <div className="bg-white w-full h-[calc(100vh-40px)] p-6">
          <h2 className="text-xl font-bold mb-4">Thêm sản phẩm</h2>
          <form onSubmit={handleSubmit}>
            <div className="image-text h-[calc(100vh-130px)] pb-5 grid grid-cols-2 gap-9 overflow-y-scroll">
              <div className="image w-[300px] h-auto ">
                <h2 className="text-[18px] font-bold text-left">Hình ảnh</h2>

                <label
                  htmlFor=""
                  className="flex flex-col items-center  w-[600px]"
                >
                  <div className="flex gap-4 w-full">
                    {[...Array(4)].map((_, index) => (
                      <div
                        key={index}
                        className="relative w-[125px] h-[125px] border rounded-[4px]"
                      >
                        {index < images.length ? (
                          <img
                            src={URL.createObjectURL(images[index])}
                            alt={`Hình ảnh ${index + 1}`}
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
                    ))}
                  </div>

                  <input
                    id="fileInput"
                    type="file"
                    accept="image/*"
                    ref={imageInputRef}
                    onChange={handleImageChange}
                    className="mb-4 hidden"
                    multiple
                  />
                  {errors.image && (
                    <div className="text-red-500 text-[12px]">
                      {errors.image}
                    </div>
                  )}
                </label>
                <p className="text-[12px] text-center mt-4">
                  Đặt hình ảnh thu nhỏ danh mục. Chỉ chấp nhận các tệp hình ảnh
                  *.png, *.jpg và *.jpeg
                </p>
              </div>

              <div className="text  w-full flex flex-col gap-5">
                <h2 className="text-[18px] font-bold text-left">Thông tin</h2>

                <label htmlFor="" className="flex flex-col gap-2 text-[14px]">
                  <div className="flex gap-1">
                    <h3 className=""> Tên sản phẩm</h3>
                    <span className="text-red-500">*</span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nhập tên sản phẩm..."
                    value={product.name}
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
                    <h3 className="">Mô tả sản phẩm</h3>
                    <span className="text-red-500">*</span>
                  </div>
                  <input
                    type="text"
                    name="description"
                    placeholder="Nhập mô tả sản phẩm..."
                    value={product.description}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-4"
                  />
                  {errors.description && (
                    <div className="text-red-500 text-[12px]">
                      {errors.description}
                    </div>
                  )}
                </label>

                <label htmlFor="" className="flex flex-col gap-2 text-[14px]">
                  <div className="flex gap-1">
                    <h3 className="">Số lượng</h3>
                    <span className="text-red-500">*</span>
                  </div>
                  <input
                    type="number"
                    name="quantity"
                    placeholder="Nhập số lượng sản phẩm..."
                    value={product.quantity}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-4"
                  />
                  {errors.quantity && (
                    <div className="text-red-500 text-[12px]">
                      {errors.quantity}
                    </div>
                  )}
                </label>

                <label htmlFor="" className="flex flex-col gap-2 text-[14px]">
                  <div className="flex gap-1">
                    <h3 className="">Danh mục</h3>
                    <span className="text-red-500">*</span>
                  </div>
                  <select
                    id="categoryID"
                    name="categoryID"
                    value={product.categoryID}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-4"
                  >
                    <option value="">Chọn danh mục</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  {errors.categoryID && (
                    <div className="text-red-500 text-[12px]">
                      {errors.categoryID}
                    </div>
                  )}
                </label>

                <label htmlFor="" className="flex flex-col gap-2 text-[14px]">
                  <div className="flex gap-1">
                    <h3 className="">Giá</h3>
                    <span className="text-red-500">*</span>
                  </div>
                  <input
                    type="text"
                    name="price"
                    placeholder="Nhập giá sản phẩm..."
                    value={product.price}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-4"
                  />
                  {errors.price && (
                    <div className="text-red-500 text-[12px]">
                      {errors.price}
                    </div>
                  )}
                </label>

                <label htmlFor="" className="flex flex-col gap-2 text-[14px]">
                  <div className="flex gap-1">
                    <h3 className="">Đơn vị tính</h3>
                    <span className="text-red-500">*</span>
                  </div>
                  <select
                    name="unit"
                    value={product.unit}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-4"
                  >
                    {" "}
                    <option value="">Chọn đơn vị</option>
                    <option value="Kg">Kilogram</option>
                    <option value="Gram">Gram</option>
                    <option value="Hộp">Hộp</option>
                    <option value="Quả">Quả</option>{" "}
                    <option value="Túi">Túi</option>
                  </select>
                  {errors.unit && (
                    <div className="text-red-500 text-[12px]">
                      {errors.unit}
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

export default AddProduct;
