import { useState, useRef, useEffect } from "react";
import { Upload } from "react-feather";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SellerDashboardLayout from "../../SellerDashboardLayout";
import { useParams } from "react-router-dom";

const AddProduct = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [previewImages, setPreviewImages] = useState([]);
  const navigate = useNavigate();
  const { productId } = useParams();

  const [categories, setCategories] = useState([]);

  const [images, setImages] = useState([]);

  const imageInputRef = useRef();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log("productId:", productId);
        const response = await axios.get(
          `http://localhost:4000/product/${productId}`
        );
        const {
          name,
          description,
          price,
          unit,
          quantity,
          status,
          request,
          categoryID,
          images,
        } = response.data;
        console.log(response.data);
        setProduct({
          name,
          description,
          price,
          unit,
          quantity,
          status,
          request,
          categoryID,
        });
        setImages(images);
        console.log(images);
        setSelectedImage(images[0]?.image_url);
      } catch (error) {
        console.error("Lỗi khi lấy thông tin danh mục:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    unit: "", // Kiểm tra và set giá trị mặc định nếu undefined
    quantity: "", // Kiểm tra và set giá trị mặc định nếu undefined    rating: "",
    status: "",
    request: "",
    categoryID: "",
  });

  const handleClose = async () => {
    navigate("/seller/manage-product");
  };

  // const handleImageChange = (e) => {
  //   const files = e.target.files;
  //   const imageArray = [];
  //   const previewImageArray = [];

  //   for (let i = 0; i < files.length; i++) {
  //     const file = files[i];
  //     imageArray.push(file);

  //     // Xem trước hình ảnh
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       previewImageArray[i] = reader.result;
  //       setPreviewImages([...previewImageArray]);
  //     };
  //     reader.readAsDataURL(file);
  //   }

  //   setImages(imageArray);
  // };

  const handleImageChange = (e) => {
    const files = e.target.files;
    const imageArray = [];
    const previewImageArray = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      imageArray.push(file);

      // Xem trước hình ảnh
      const reader = new FileReader();
      reader.onload = () => {
        previewImageArray[i] = reader.result;
        setPreviewImages([...previewImageArray]);
      };
      reader.readAsDataURL(file);
    }

    setImages(imageArray);
    setSelectedImage(previewImageArray[0]); // Hiển thị ảnh đầu tiên trong preview
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("unit", product.unit);
    formData.append("status", product.status);
    formData.append("request", product.request);
    formData.append("quantity", product.quantity);
    formData.append("categoryID", product.categoryID);
    if (images.length > 0) {
      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }
    }
    try {
      const response = await axios.put(
        `http://localhost:4000/edit/product/${productId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data.message);
      navigate("/seller/manage-product");
    } catch (error) {
      console.error("Lỗi khi thêm danh mục:", error);
    }
  };

  const DefaultAvatar = "../../src/assets/images/blank-image.svg";

  useEffect(() => {
    // Truy vấn danh sách danh mục từ cơ sở dữ liệu
    axios.get("http://localhost:4000/list/categories").then((response) => {
      setCategories(response.data);
    });
  }, []);

  return (
    <>
      <SellerDashboardLayout>
        <div className="bg-white rounded-[10px] w-full h-auto p-6">
          <h2 className="text-xl font-bold mb-4">Chỉnh sửa sản phẩm</h2>
          <form onSubmit={handleSubmit}>
            <div className="image-text h-auto pb-5 grid grid-cols-2">
              <div className="image w-[300px] h-auto ">
                <h2 className="text-[18px] font-bold text-left">Hình ảnh</h2>

                <label
                  htmlFor=""
                  className="flex flex-col items-center  w-[600px]"
                >
                  <div className="flex gap-2 w-full">
                    {[...Array(4)].map((_, index) => (
                      <div
                        key={index}
                        className="relative w-[100px] h-[100px] border rounded-[4px]"
                      >
                        {index < previewImages.length ? (
                          <img
                            src={
                              previewImages[index] ||
                              (images[index]
                                ? `http://localhost:4000/${images[index].image_url}`
                                : DefaultAvatar)
                            }
                            alt={`Hình ảnh ${index + 1}`}
                            className="w-full h-full object-cover rounded-[4px]"
                          />
                        ) : (
                          images[index] && (
                            <img
                              src={`http://localhost:4000/${images[index].image_url}`}
                              alt="Hình ảnh lấy từ server"
                              className="w-full h-full object-cover rounded-[4px]"
                            />
                          )
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

              <div className="text  w-full flex flex-col">
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
                    onChange={(e) =>
                      setProduct({ ...product, name: e.target.value })
                    }
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
                    onChange={(e) =>
                      setProduct({ ...product, description: e.target.value })
                    }
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
                    onChange={(e) =>
                      setProduct({ ...product, quantity: e.target.value })
                    }
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
                    onChange={(e) =>
                      setProduct({ ...product, categoryID: e.target.value })
                    }
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
                    onChange={(e) =>
                      setProduct({ ...product, price: e.target.value })
                    }
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
                    onChange={(e) =>
                      setProduct({ ...product, unit: e.target.value })
                    }
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

                <label htmlFor="" className="flex flex-col gap-2 text-[14px]">
                  <div className="flex gap-1">
                    <h3 className="">Trạng thái</h3>
                    <span className="text-red-500">*</span>
                  </div>
                  <select
                    name="status"
                    value={product.status}
                    onChange={(e) =>
                      setProduct({ ...product, status: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 mb-4"
                  >
                    {" "}
                    <option value="">Chọn trạng thái</option>
                    <option value="Còn hàng">Còn hàng</option>
                    <option value="Hết hàng">Hết hàng</option>
                  </select>
                  {errors.status && (
                    <div className="text-red-500 text-[12px]">
                      {errors.status}
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
      </SellerDashboardLayout>
      {/* )} */}
    </>
  );
};

export default AddProduct;
