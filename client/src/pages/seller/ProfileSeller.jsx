import SellerDashboardLayout from "./SellerDashboardLayout";
import Seedling from "../../assets/images/seedling.png";
import { useState, useRef, useEffect } from "react";
import { Upload } from "react-feather";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function ProfileSeller() {
  const userId = useSelector((state) => state.user.userId);

  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    shipping_address: "",
    image: "",
    phone: "",
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
        const { name, email, image, shipping_address, phone } = response.data;
        console.log(response.data);
        setUser({ name, email, image, shipping_address, phone });
        setSelectedImage(image);
      } catch (error) {
        console.error("Lỗi khi lấy thông tin danh mục:", error);
      }
    };

    fetchUser();
  }, [userId]);

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

  const DefaultAvatar = "../../src/assets/images/blank-image.svg";

  const navigateToEditProfileSeller = () => {
    navigate(`/seller/edit-profile/${userId}`);
  };

  return (
    <>
      <SellerDashboardLayout>
        {" "}
        <div className="bg-backgroundLightGray p-[35px] flex flex-col gap-5 w-full h-auto rounded-[10px]">
          <div className="">
            <div className="title list user flex justify-between items-center">
              <h1 className="text-[24px] font-[600]">Hồ sơ nhà bán hàng</h1>
              <div className="relative btn-add flex gap-2">
                <button
                  className="bg-yellow flex justify-center items-center gap-2 rounded-[4px] py-[8px] px-[14px] text-white text-[14px] hover:bg-[#08886e] transition"
                  onClick={navigateToEditProfileSeller}
                >
                  <i className="fa-solid fa-user-plus"></i>
                  Chỉnh sửa hồ sơ
                </button>
              </div>
            </div>
            <div className="flex justify-start items-center gap-1">
              <div className="w-[74px] h-[3px] bg-primaryGreen"></div>
              <img src={Seedling} alt="" />
              <div className="w-[74px] h-[3px] bg-primaryGreen"></div>
            </div>
          </div>
          <div className="table w-full h-[400px]">
            <h3 className="text-[20px] text-textBlack font-medium">
              Thông tin chi tiết
            </h3>
            <form>
              <div className="image-text h-auto pb-5 flex flex-col">
                <div className="image w-[300px] h-auto ">
                  <label htmlFor="" className="flex flex-col items-center">
                    <div className="relative mt-3 w-[125px] h-[125px] border mb-4 rounded-[4px]">
                      {selectedImage ? (
                        <img
                          src={`http://localhost:4000/${selectedImage}`}
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
                </div>

                <div className="text w-full flex flex-col gap-5">
                  <label
                    htmlFor=""
                    className="flex justify-start items-start gap-2 text-[14px]"
                  >
                    <div className="w-[200px] h-full">
                      {" "}
                      <h3 className="text-[16px] text-text2222">
                        Tên người bán hàng:
                      </h3>
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Nhập tên người dùng..."
                      value={user.name}
                      className="text-textGray pt-[2px] w-full outline-none bg-backgroundLightGray"
                    />
                    {errors.name && (
                      <div className="text-red-500 text-[12px]">
                        {errors.name}
                      </div>
                    )}
                  </label>

                  <label
                    htmlFor=""
                    className="flex justify-start items-start gap-2 text-[14px]"
                  >
                    <div className="w-[200px] h-full">
                      {" "}
                      <h3 className="text-[16px] text-text2222">Email:</h3>
                    </div>
                    <input
                      type="text"
                      name="email"
                      placeholder="Nhập email..."
                      value={user.email}
                      className="text-textGray pt-[2px] w-full outline-none bg-backgroundLightGray"
                    />
                    {errors.email && (
                      <div className="text-red-500 text-[12px]">
                        {errors.email}
                      </div>
                    )}
                  </label>

                  <label
                    htmlFor=""
                    className="flex justify-start items-start gap-2 text-[14px]"
                  >
                    <div className="w-[200px] h-full">
                      {" "}
                      <h3 className="text-[16px] text-text2222">Địa chỉ:</h3>
                    </div>
                    {user.shipping_address ? (
                      <input
                        type="text"
                        name="address"
                        placeholder="Nhập address..."
                        value={user.shipping_address}
                        className="text-textGray pt-[2px] w-full outline-none bg-backgroundLightGray"
                      />
                    ) : (
                      <input
                        type="text"
                        name="address"
                        value="Chưa cập nhật"
                        className="text-textGray pt-[2px] w-full outline-none bg-backgroundLightGray"
                      />
                    )}
                    {errors.shipping_address && (
                      <div className="text-red-500 text-[12px]">
                        {errors.shipping_address}
                      </div>
                    )}
                  </label>

                  <label
                    htmlFor=""
                    className="flex justify-start items-start gap-2 text-[14px]"
                  >
                    <div className="w-[200px] h-full">
                      {" "}
                      <h3 className="text-[16px] text-text2222">
                        Số điện thoại:
                      </h3>
                    </div>

                    {user.phone ? (
                      <input
                        type="text"
                        name="phone"
                        placeholder="Nhập phone..."
                        value={user.phone}
                        className="w-full outline-none bg-backgroundLightGray"
                      />
                    ) : (
                      <input
                        type="text"
                        name="address"
                        value="Chưa cập nhật"
                        className="text-textGray pt-[2px] w-full outline-none bg-backgroundLightGray"
                      />
                    )}

                    {errors.phone && (
                      <div className="text-red-500 text-[12px]">
                        {errors.phone}
                      </div>
                    )}
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </SellerDashboardLayout>
    </>
  );
}
