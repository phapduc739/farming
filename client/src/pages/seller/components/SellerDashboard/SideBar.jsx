import React, { useState, useEffect } from "react";
import BgSeller from "../../../../assets/images/cover.png";
import BgStudio from "../../../../assets/images/studio.png";
import IconHome from "../../../../assets/images/icon-home.svg";
import IconProduct from "../../../../assets/images/icon-product.svg";
import IconUser from "../../../../assets/images/icon-user.svg";
import IconSetting from "../../../../assets/images/icon-setting.svg";
import IconLogout from "../../../../assets/images/icon-logout.svg";

function SideBar({ handleContentChange }) {
  const [currentContent, setCurrentContent] = useState("dashboard");

  const handleButtonClick = (content) => {
    // Call the prop function to change the content
    handleContentChange(content);

    setCurrentContent(content);

    // Remove the classes from all buttons
    document.querySelectorAll(".sidebar-button").forEach((button) => {
      button.classList.remove(
        "text-theme-color",
        "border-l-[3px]",
        "border-theme-color",
        "font-semibold",
        "bg-lightGreen"
      );
    });

    // Get the clicked button element by its content (adjust as needed)
    const clickedButton = document.querySelector(
      `.sidebar-button[data-content="${content}"]`
    );

    // Add the classes to the clicked button
    if (clickedButton) {
      clickedButton.classList.add(
        "text-theme-color",
        "border-l-[3px]",
        "border-theme-color",
        "font-semibold",
        "bg-lightGreen"
      );
    }
  };

  useEffect(() => {
    // Gọi hàm handleButtonClick khi component được render
    handleButtonClick(currentContent);
  }, [currentContent, handleButtonClick]);

  return (
    <div className="px-3 scroll-m-0">
      <div className="dashboard-left-sidebar h-auto w-full relative   bg-them-gray">
        <div className="rounded-lg">
          <div className="profile-img  z-10">
            <div className="">
              <img
                src={BgSeller}
                className="w-full h-[150px] rounded-lg"
                alt="BgSeller"
              />
            </div>
          </div>
          <div className="profile-content w-full h-[180px]  z-20 flex relative mt-[-50px]">
            <div className="profile-w  h-[180px]  absolute">
              <div className="  flex justify-center items-center  w-[270px] h-[105px] z-10">
                <div className="">
                  <img
                    src={BgStudio}
                    className="w-[93px] h-[93px] bg-gray-200 rounded-full"
                    alt="BgStudio"
                  />
                </div>
              </div>
              <div className="profile text-center w-[270px] h-[65px] border-b border-gray-300">
                <div className="text-[21px] font-medium ">
                  <h3>Farmers Market</h3>
                </div>
                <div className="text-[14px] font-normal">
                  <h6>Farmersmarket.gmail.com</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-box relative w-full">
            <ul className="  ">
              <li className=" flex  items-center h-[50px]  product user-dashboard-section">
                <button
                  className="sidebar-button px-5 py-3 w-full flex items-center"
                  data-content="dashboard"
                  onClick={() => handleButtonClick("dashboard")}
                >
                  <img className="mr-2" src={IconHome} alt="" />
                  <a className="text-[18px]">Trang quản lý</a>
                </button>
              </li>

              <li className=" w-[100%] h-[50px]  management ">
                <button
                  className="sidebar-button px-5 py-3 w-full flex items-center"
                  data-content="product"
                  onClick={() => handleButtonClick("product")}
                >
                  <img className="mr-2" src={IconProduct} alt="" />
                  <a className="text-[18px]">Sản phẩm</a>
                </button>
              </li>
              <li className=" w-[100%] h-[50px]  oder ">
                <button
                  className="px-5 py-3 sidebar-button w-full flex items-center "
                  data-content="order"
                  onClick={() => handleButtonClick("order")}
                >
                  <img className="mr-2" src={IconProduct} alt="" />
                  <a className="text-[18px]">Đơn hàng</a>
                </button>
              </li>

              <li className=" w-[100%] h-[50px] profile ">
                <button
                  className="px-5 py-3 sidebar-button w-full flex items-center"
                  data-content="profile"
                  onClick={() => handleButtonClick("profile")}
                >
                  <img className="mr-2" src={IconUser} alt="" />
                  <a className="text-[18px]">Thông tin</a>
                </button>
              </li>

              <li className=" w-[100%] h-[50px]  settings  ">
                <button
                  className="px-5 py-3 sidebar-button w-full flex items-center"
                  data-content="setting"
                  onClick={() => handleButtonClick("setting")}
                >
                  <img className="mr-2" src={IconSetting} alt="" />
                  <a className="text-[18px]">Cài đặt</a>
                </button>
              </li>
              <li className=" w-[100%] h-[50px]   exit ">
                <button
                  className="px-5 py-3 sidebar-button w-full flex items-center"
                  data-content="setting"
                  onClick={() => handleButtonClick("exit")}
                >
                  <img className="mr-2" src={IconLogout} alt="" />
                  <a className="text-[18px]">Thoát</a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
