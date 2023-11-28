import React, { useState } from "react";

function Profile() {
  // State variables
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    companyName: "Cửa Hàng Tạp Hóa",
    email: "joshuadbass@rhyta.com",
    country: "107 Đường Veltri",
    // Add other profile data fields here
  });

  // Function to open the edit profile modal
  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  // Function to handle profile data submission (you can replace this)
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // Process and update the profile data here (e.g., make an API call)
    // Then, close the modal
    setIsEditModalOpen(false);
  };
  return (
    <>
      <div className="contail-sell px-3">
        <div className="w-full h-[100%]  bg-them-gray flex  flex-wrap px-8 py-8  ">
          <div className=" w-full h-[auto]    rounded-md">
            <div className="tab-content " id="pills-tabContent">
              <div className="dashboard-home flex flex-col">
                <div className="title relative">
                  <h2 className="text-[26px] font-bold text-text2222 relative ">
                    Thông tin{" "}
                  </h2>
                  <div className="title-leaf relative flex items-center justify-center mt-1 w-[120px] h-[30px]">
                    <div className="absolute left-0 w-[45px] h-px bg-theme-color z-10"></div>
                    <i className="relative fa-solid fa-seedling z-0 text-theme-color"></i>
                    <div className="absolute right-0 w-[45px] h-px bg-theme-color z-10"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-xxl-6 w-[840px] h-[436]  flex relative bg-slate-200 "> */}
            <div className=" px-4 py-4 profile-tab  relative  bg-white">
              <div className="dashboard-title flex justify-between items-center  ">
                <h3 className=" leading-[1.3] relative font-semibold text-[20px]">
                  Tên Hồ Sơ
                </h3>
                <button
                  className="btn-sm py-2 px-4 text-base font-medium bg-theme-color text-white text-[14px]"
                  onClick={openEditModal}
                >
                  Chỉnh Sửa Hồ Sơ
                </button>
              </div>

              <ul className="flex flex-wrap flex-col custom-gap">
                <li className="flex items-center">
                  <h5 className=" w-[220px] text-[15px] font-[400] leading-[1.2]">
                    Tên Công Ty :
                  </h5>
                  <h5 className="text-[15px] font-[400] leading-[1.2]">
                    Cửa Hàng Tạp Hóa
                  </h5>
                </li>
                <li className="flex">
                  <h5 className="text-[15px] font-[400] leading-[1.2] w-[220px]">
                    Địa Chỉ Email :
                  </h5>
                  <h5 className="text-[15px] font-[400] leading-[1.2]">
                    joshuadbass@rhyta.com
                  </h5>
                </li>
                <li className="flex">
                  <h5 className="text-[15px] font-[400] leading-[1.2] w-[220px]">
                    Quốc Gia / Khu Vực :
                  </h5>
                  <h5 className="text-[15px] font-[400] leading-[1.2]">
                    107 Đường Veltri
                  </h5>
                </li>
                <li className="flex">
                  <h5 className="text-[15px] font-[400] leading-[1.2] w-[220px]">
                    Thành Lập :
                  </h5>
                  <h5 className="text-[15px] font-[400] leading-[1.2]">2022</h5>
                </li>
                <li className="flex">
                  <h5 className="text-[15px] font-[400] leading-[1.2] w-[220px]">
                    Số Lượng Nhân Viên :
                  </h5>
                  <h5 className="text-[15px] font-[400] leading-[1.2]">
                    154 - 360 Người
                  </h5>
                </li>
                <li className="flex">
                  <h5 className="text-[15px] font-[400] leading-[1.2] w-[220px]">
                    Danh Mục :
                  </h5>
                  <h5 className="text-[15px] font-[400] leading-[1.2]">
                    Tạp Hóa
                  </h5>
                </li>
                <li className="flex">
                  <h5 className="text-[15px] font-[400] leading-[1.2] w-[220px]">
                    Địa Chỉ Đường :
                  </h5>
                  <h5 className="text-[15px] font-[400] leading-[1.2]">
                    234 Đường High
                  </h5>
                </li>
                <li className="flex">
                  <h5 className="text-[15px] font-[400] leading-[1.2] w-[220px]">
                    Thành Phố / Tỉnh :
                  </h5>
                  <h5 className="text-[15px] font-[400] leading-[1.2]">
                    107 Đường Veltri
                  </h5>
                </li>
                <li className="flex">
                  <h5 className="text-[15px] font-[400] leading-[1.2] w-[220px]">
                    Mã Zip :
                  </h5>
                  <h5 className="text-[15px] font-[400] leading-[1.2]">
                    B23 6SN
                  </h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
