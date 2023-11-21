import React from "react";
import LanguageSwitcher from "../common/LanguageSwitcher";
import Logo from "../../../assets/images/logo.png";
import Location from "./Location";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import AllCategories from "./AllCategories";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import IconDeal from "../../../assets/images/svgexport-19.svg";

export default function Header() {
  const home = "Trang chủ";
  const linksHome = ["Trang chủ 1", "Trang chủ 2", "Trang chủ 3"];

  const store = "Cửa hàng";
  const linksStore = ["Cửa hàng 1", "Cửa hàng 2", "Cửa hàng 3"];

  const argi = "Nông sản";
  const linksArgi = ["Nông sản 1", "Nông sản 2", "Nông sản 3"];

  const sale = "Khuyến mãi";
  const linksSale = ["Khuyến mãi 1", "Khuyến mãi 2", "Khuyến mãi 3"];

  const contact = "Liên hệ";
  const linksContact = ["Khuyến mãi 1", "Khuyến mãi 2", "Khuyến mãi 3"];

  return (
    <>
      <div className="header w-full h-auto">
        <div className="w-full h-[40px] bg-primaryGreen">
          <div className="w-[1280px] h-full m-auto flex justify-between items-center">
            <div className="text-14px-white">
              <i className="fa-solid fa-location-dot mr-[12px]"></i>
              <span>3/2, Ninh Kiều, Cần Thơ</span>
            </div>
            <div className="relative h-full">
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        <div className="w-full h-auto py-[24px]">
          <div className="w-[1280px] h-full m-auto flex justify-between items-center">
            <div className="logo">
              <img
                className="w-[250px] h-auto object-cover"
                src={Logo}
                alt="Logo"
              />
            </div>
            <div className="flex justify-center items-center gap-[12px]">
              <Location />
              <SearchBar />
            </div>
            <div className="links h-full">
              <Navigation />
            </div>
          </div>
        </div>

        <div className="w-full h-auto border border-b-grayDark">
          <div className="w-[1280px] h-full m-auto flex justify-between items-center">
            <AllCategories />
            <div className="flex justify-center items-center gap-[24px]">
              <NavBar name={home} links={linksHome} />

              <NavBar name={store} links={linksStore} />

              <NavBar name={argi} links={linksArgi} />

              <NavBar name={sale} links={linksSale} />

              <NavBar name={contact} links={linksContact} />
            </div>
            <div className="">
              <Link className="flex justify-center items-center gap-[12px] text-[16px] text-primaryGreen font-semibold bg-greenLight px-[20px] py-[12px] rounded-[5px]">
                <img
                  className="w-[24px] h-[24px]"
                  src={IconDeal}
                  alt="Icon Deal"
                />
                Ưu đãi hôm nay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
