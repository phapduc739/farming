import SellerDashboardLayout from "./SellerDashboardLayout";
import Seedling from "../../assets/images/seedling.png";
import { useState, useRef, useEffect } from "react";
import { Upload } from "react-feather";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import logoUser from "../../assets/images/icon-user-logo.png";

export default function ProfileSeller() {
  const { userId } = useParams();

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [street, setStreet] = useState("");
  const [phone, setphone] = useState("");

  // State cho các lỗi
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    province: "",
    district: "",
    ward: "",
    street: "",
    phone: "",
    image: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    image: "",
    address: "",
    phone: "",
    coordinates: "",
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
        const { name, email, image, address, phone } = response.data;
        console.log(response.data);
        setUser({ name, email, image, address, phone });
        setSelectedImage(image);
      } catch (error) {
        console.error("Lỗi khi lấy thông tin danh mục:", error);
      }
    };

    fetchUser();
  }, [userId]);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get("https://provinces.open-api.vn/api/?depth=3")
      .then((response) => {
        setProvinces(response.data);
      })
      .catch((error) => {
        console.error("Lỗi khi fetch dữ liệu từ API:", error);
      });
  }, []);

  useEffect(() => {
    // Preload the first province's districts and wards
    if (provinces.length > 0) {
      setDistricts(provinces[0]?.districts || []);
      setWards(provinces[0]?.districts[0]?.wards || []);
    }
  }, [provinces]);

  const handleProvinceChange = (event) => {
    const selectedProvinceCode = event.target.value;
    setSelectedProvince(selectedProvinceCode);
    setErrors({ ...errors, province: "" }); // Reset lỗi khi chọn tỉnh/thành phố

    const selectedProvinceData = provinces.find(
      (province) => province.code === parseInt(selectedProvinceCode)
    );
    setDistricts(selectedProvinceData.districts);
    setSelectedDistrict(selectedProvinceData.districts[0]?.code);
    setWards(selectedProvinceData.districts[0]?.wards);
    setSelectedWard(selectedProvinceData.districts[0]?.wards[0]?.code);

    // Update the user state with selectedProvince
    setUser((prevUser) => ({
      ...prevUser,
      address: {
        ...prevUser.address,
        province: selectedProvinceData.name,
      },
    }));
  };

  const handleDistrictChange = (event) => {
    const selectedDistrictCode = event.target.value;
    setSelectedDistrict(selectedDistrictCode);
    setErrors({ ...errors, district: "" }); // Reset lỗi khi chọn quận/huyện

    const selectedDistrictData = districts.find(
      (district) => district.code === parseInt(selectedDistrictCode)
    );
    setWards(selectedDistrictData?.wards);
    setSelectedWard(selectedDistrictData?.wards[0]?.code);

    // Update the user state with selectedDistrict
    setUser((prevUser) => ({
      ...prevUser,
      address: {
        ...prevUser.address,
        district: selectedDistrictData.name,
      },
    }));
  };

  const handleWardChange = (event) => {
    setSelectedWard(event.target.value);

    // Update the user state with selectedWard
    setUser((prevUser) => ({
      ...prevUser,
      address: {
        ...prevUser.address,
        ward: event.target.value,
      },
    }));
  };

  const handleStreetChange = (event) => {
    setStreet(event.target.value);

    // Update the user state with street
    setUser((prevUser) => ({
      ...prevUser,
      address: {
        ...prevUser.address,
        street: event.target.value,
      },
    }));
  };

  const handlephoneChange = (event) => {
    setphone(event.target.value);

    // Update the user state with phone
    setUser((prevUser) => ({
      ...prevUser,
      phone: event.target.value,
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!selectedProvince) {
      newErrors.province = "Vui lòng chọn tỉnh/thành phố";
      valid = false;
    }

    if (!selectedDistrict) {
      newErrors.district = "Vui lòng chọn quận/huyện";
      valid = false;
    }

    if (!selectedWard) {
      newErrors.ward = "Vui lòng chọn phường/xã";
      valid = false;
    }

    if (!street.trim()) {
      newErrors.street = "Vui lòng nhập tên đường";
      valid = false;
    }

    if (!phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  // const geocodeAddress = async (address) => {
  //   try {
  //     const response = await axios.get(
  //       "https://maps.googleapis.com/maps/api/geocode/json",
  //       {
  //         params: {
  //           address: address,
  //           key: "AIzaSyBnFedHyyQAA6CvyELBvra9XzQy0p3KkFA",
  //         },
  //       }
  //     );

  //     console.log(response.data); // Log dữ liệu trả về từ API

  //     if (response.data.results.length > 0) {
  //       const location = response.data.results[0].geometry.location;
  //       return { latitude: location.lat, longitude: location.lng };
  //     } else {
  //       console.error("Không tìm thấy tọa độ cho địa chỉ:", address);
  //       return null;
  //     }
  //   } catch (error) {
  //     console.error("Lỗi khi thực hiện Geocoding:", error);
  //     return null;
  //   }
  // };

  const geocodeAddress = async (address) => {
    try {
      const response = await axios.get(
        "https://api.opencagedata.com/geocode/v1/json",
        {
          params: {
            q: address,
            key: "e98ef6664a9b4406bb301446e593a1a4", // Replace with your OpenCage API key
          },
        }
      );

      console.log(response.data); // Log dữ liệu trả về từ API

      if (response.data.results.length > 0) {
        const location = response.data.results[0].geometry;
        return { latitude: location.lat, longitude: location.lng };
      } else {
        console.error("Không tìm thấy tọa độ cho địa chỉ:", address);
        return null;
      }
    } catch (error) {
      console.error("Lỗi khi thực hiện Geocoding:", error);
      return null;
    }
  };

  const handleClose = async () => {
    navigate("/seller/profile");
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

    const isValid = validateForm();

    if (isValid) {
      const formattedAddress = `${user.address.street}, ${user.address.ward}, ${user.address.district}, ${user.address.province}`;

      const coordinates = await geocodeAddress(formattedAddress);

      if (coordinates) {
        // Create formData
        const formData = new FormData();
        formData.append("name", user.name);
        formData.append("email", user.email);
        formData.append("address", formattedAddress);
        formData.append("phone", phone);
        formData.append("coordinates", JSON.stringify(coordinates));
        if (image) {
          formData.append("image", image);
        }

        try {
          const response = await axios.put(
            `http://localhost:4000/edit/seller/${userId}`,
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
            navigate("/seller/profile");
          } else {
            // Xử lý khi thất bại
            console.error(
              "Lỗi khi chỉnh sửa hồ sơ người bán hàng:",
              response.data.error
            );
          }
        } catch (error) {
          console.error("Lỗi khi chỉnh sửa hồ sơ người bán hàng:", error);
        }
      } else {
        // Handle the case where coordinates are not obtained
        console.error("Không thể lấy tọa độ cho địa chỉ:", formattedAddress);
      }
    } else {
      console.log("Form is not valid. Please fix the errors.");
    }

    // console.log(user);
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
                  // onClick={navigateToAddProduct}
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
            <form onSubmit={handleSubmit}>
              <div className="image-text h-auto pb-5 flex flex-col gap-4">
                <div className="image w-[300px] h-auto ">
                  <label htmlFor="" className="flex flex-col items-center">
                    <div className="relative mt-3 w-[125px] h-[125px] border mb-4 rounded-[4px]">
                      <img
                        src={
                          previewImage ||
                          `http://localhost:4000/${selectedImage}`
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
                      onChange={(e) =>
                        setUser({ ...user, name: e.target.value })
                      }
                      className="text-textGray border pt-[2px] w-full outline-none bg-backgroundLightGray"
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
                      onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
                      className="text-textGray border pt-[2px] w-full outline-none bg-backgroundLightGray"
                    />
                    {errors.email && (
                      <div className="text-red-500 text-[12px]">
                        {errors.email}
                      </div>
                    )}
                  </label>

                  {/* <label
                    htmlFor=""
                    className="flex justify-start items-start gap-2 text-[14px]"
                  >
                    <div className="w-[200px] h-full">
                      {" "}
                      <h3 className="text-[16px] text-text2222">Địa chỉ:</h3>
                    </div>
                    {user.address ? (
                      <input
                        type="text"
                        name="address"
                        placeholder="Nhập address..."
                        value={user.address}
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
                    {errors.address && (
                      <div className="text-red-500 text-[12px]">
                        {errors.address}
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
                  </label> */}

                  {/*  */}
                </div>

                {/*
                 */}

                <div className="">
                  <button
                    type="button"
                    className="bg-primaryGreen text-white px-4 py-2 rounded-md"
                  >
                    {" "}
                    <h3>Thêm địa chỉ và số điện thoại</h3>
                  </button>
                </div>

                <div className="">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Tỉnh/Thành phố:
                  </label>
                  <select
                    className={`border rounded p-2 w-full ${
                      errors.province ? "border-red-500" : ""
                    }`}
                    value={selectedProvince}
                    onChange={handleProvinceChange}
                  >
                    <option value="">Chọn tỉnh/thành phố</option>
                    {provinces.map((province) => (
                      <option key={province.code} value={province.code}>
                        {province.name}
                      </option>
                    ))}
                  </select>
                  {errors.province && (
                    <p className="text-red-500 text-sm">{errors.province}</p>
                  )}
                </div>
                <div className="">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Quận/Huyện:
                  </label>
                  <select
                    className={`border rounded p-2 w-full ${
                      errors.district ? "border-red-500" : ""
                    }`}
                    value={selectedDistrict}
                    onChange={handleDistrictChange}
                  >
                    <option value="">Chọn quận/huyện</option>
                    {districts.map((district) => (
                      <option key={district.code} value={district.code}>
                        {district.name}
                      </option>
                    ))}
                  </select>
                  {errors.district && (
                    <p className="text-red-500 text-sm">{errors.district}</p>
                  )}
                </div>
                <div className="">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Phường/Xã:
                  </label>
                  <select
                    className={`border rounded p-2 w-full ${
                      errors.ward ? "border-red-500" : ""
                    }`}
                    value={selectedWard}
                    onChange={handleWardChange}
                  >
                    <option value="">Chọn phường/xã</option>
                    {wards.map((ward) => (
                      <option key={ward.code} value={ward.name}>
                        {ward.name}
                      </option>
                    ))}
                  </select>
                  {errors.ward && (
                    <p className="text-red-500 text-sm">{errors.ward}</p>
                  )}
                </div>
                <div className="">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Tên đường:
                  </label>
                  <input
                    type="text"
                    className={`border rounded p-2 w-full ${
                      errors.street ? "border-red-500" : ""
                    }`}
                    value={street}
                    onChange={handleStreetChange}
                  />
                  {errors.street && (
                    <p className="text-red-500 text-sm">{errors.street}</p>
                  )}
                </div>
                <div className="">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Số điện thoại:
                  </label>
                  <input
                    type="text"
                    className={`border rounded p-2 w-full ${
                      errors.phone ? "border-red-500" : ""
                    }`}
                    value={phone}
                    onChange={handlephoneChange}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>
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
            </form>
          </div>
        </div>
      </SellerDashboardLayout>
    </>
  );
}
