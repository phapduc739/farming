import { MapPin } from "react-feather";
import IconVn from "../../assets/images/vn.png";
import { ChevronDown } from "react-feather";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { PhoneCall } from "react-feather";
import { Heart } from "react-feather";
import { ShoppingCart } from "react-feather";
import { User } from "react-feather";
import { Search } from "react-feather";
import { AlignLeft } from "react-feather";
import { Zap } from "react-feather";
import HeroBg1 from "../../assets/images/1 1.png";
import { ArrowRight } from "react-feather";

import HeroBg2 from "../../assets/images/2 1.png";
import HeroBg3 from "../../assets/images/3 1.png";

import Feature1 from "../../assets/images/fe1.jpg";
import Feature2 from "../../assets/images/fe2.jpg";
import Feature3 from "../../assets/images/fe3.png";
import Feature4 from "../../assets/images/fe4.jpg";

import Banner1 from "../../assets/images/banner1.jpg";
import Banner2 from "../../assets/images/banner2.jpg";

import Seedling from "../../assets/images/seedling.png";

import { Clock } from "react-feather";

import ImageProduct from "../../assets/images/cachua.png";

import { Plus } from "react-feather";
import BannerRauCuQua from "../../assets/images/14.jpg";

import BannerRauQua from "../../assets/images/Frame 92.png";
import BannerNam from "../../assets/images/10.jpg";

import BgSendEmail from "../../assets/images/image 6.png";

import { Mail } from "react-feather";

import IconProduct from "../../assets/images/product.svg";

import IconDelivery from "../../assets/images/delivery.svg";
import IconDiscount from "../../assets/images/discount.svg";
import IconMarket from "../../assets/images/market.svg";

const CategoryData = [
  {
    image: "src/assets/images/lemon.png",
    name: "Lúa gạo và ngủ cốc",
  },
  {
    image: "src/assets/images/leaf.png",
    name: "Rau củ quả",
  },
  {
    image: "src/assets/images/carrot.png",
    name: "Trái cây",
  },
  {
    image: "src/assets/images/box.png",
    name: "Sản phẩm chế biến",
  },
  {
    image: "src/assets/images/cubes.png",
    name: "Sản phẩm khác",
  },
];

const ProductData = [
  {
    image: "src/assets/images/cachua.png",
    name: "Cà chua xuất khẩu",
    unit: "1 Kg",
    price: "30.000đ",
  },
  {
    image: "src/assets/images/cachua.png",
    name: "Cà chua xuất khẩu",
    unit: "1 Kg",
    price: "30.000đ",
  },
  {
    image: "src/assets/images/cachua.png",
    name: "Cà chua xuất khẩu",
    unit: "1 Kg",
    price: "30.000đ",
  },
  {
    image: "src/assets/images/cachua.png",
    name: "Cà chua xuất khẩu",
    unit: "1 Kg",
    price: "30.000đ",
  },
  {
    image: "src/assets/images/cachua.png",
    name: "Cà chua xuất khẩu",
    unit: "1 Kg",
    price: "30.000đ",
  },
  {
    image: "src/assets/images/cachua.png",
    name: "Cà chua xuất khẩu",
    unit: "1 Kg",
    price: "30.000đ",
  },
];

function Home() {
  return (
    <>
      {/* HEADER */}
      <div className="header border border-black w-full h-auto">
        {/* Header top */}
        <div className="header-top w-full h-[42px] bg-primaryGreen ">
          <div className="header-top-container w-[1280px] h-full m-auto flex justify-between items-center">
            <div className="header-top-left">
              <div className="map-pin flex justify-center items-center gap-1">
                <MapPin name="map" size={16} color="white" />
                <span className="text-[14px] text-white font-medium">
                  3/2, Ninh Kiều, Cần Thơ
                </span>
              </div>
            </div>
            <div className="header-top-right">
              <div className="select-language flex justify-center items-center gap-3">
                <img className="w-[20px] h-auto" src={IconVn} alt="VN" />
                <span className="text-[14px] text-white font-medium">
                  Vietnam
                </span>
                <ChevronDown name="down" size={16} color="white" />
              </div>
            </div>
          </div>
        </div>

        {/* Header center */}
        <div className="header-center w-full h-[100px]">
          <div className="header-center-container w-[1280px] h-full m-auto flex justify-between items-center">
            <div className="header-center-left">
              <div className="logo">
                <img src={Logo} alt="" />
              </div>
            </div>

            <div className="header-center-main flex justify-center items-center gap-[13px]">
              <button className="map flex justify-between items-center gap-2 border border-lineGray p-[7px] rounded-[5px]">
                <div className="map-pin w-[35px] h-[35px] bg-[#f3f5f9] flex justify-center items-center">
                  <MapPin name="map" size={16} color="black" />
                </div>
                <span className="text-[16px] text-primaryGreen font-semibold">
                  Vị trí của bạn
                </span>
                <ChevronDown name="map" size={16} color="black" />
              </button>
              <div className="search flex justify-center items-center">
                <form action="" className="flex justify-center items-center">
                  <input
                    type="text"
                    className="w-[400px] text-[16px] p-3 border border-lineGray rounded-tl-[5px] rounded-bl-[5px] outline-primaryGreen"
                    placeholder="Tìm kiếm nông sản ở đây..."
                  />
                  <button
                    type="submit"
                    className="bg-yellow p-[15px] rounded-tr-[5px] rounded-br-[5px]"
                  >
                    <Search name="search" size={20} color="white" />
                  </button>
                </form>
              </div>
            </div>

            <div className="header-center-right flex justify-center item-center gap-[15px]">
              <Link>
                <PhoneCall name="phone" size={24} color="black" />
              </Link>
              |
              <Link>
                <Heart name="heart" size={24} color="black" />
              </Link>
              |
              <Link className="relative">
                <ShoppingCart name="cart" size={24} color="black" />
                <div className="quantity-cart absolute top-[-12px] left-[14px] w-[22px] h-[22px] flex justify-center items-center rounded-[4px] bg-secondaryRed">
                  <span className="text-[12px] text-white font-semibold">
                    99
                  </span>
                </div>
              </Link>
              |
              <Link to="/register/user">
                <User name="user" size={24} color="black" />
              </Link>
            </div>
          </div>
        </div>

        {/* Header bottom */}
        <div className="header-bottom w-full h-[52px]">
          <div className="header-bottom-container w-[1280px] h-full m-auto flex justify-between items-center">
            <div className="header-bottom-left">
              <button className="menu-list flex justify-start items-center gap-[15px] bg-primaryGreen px-[28px] py-[14px] rounded-[5px]">
                <AlignLeft size={24} color="white" />
                <span className="text-[18px] text-white font-semibold">
                  Tất cả danh mục
                </span>
              </button>
            </div>
            <div className="header-bottom-main">
              <ul className="flex justify-center items-center gap-5">
                <li className="text-[16px] text-[text2222] flex justify-center items-center font-medium">
                  Trang chủ
                  <ChevronDown size={20} color="#222222" />
                </li>
                <li className="text-[16px] text-[text2222] flex justify-center items-center font-medium">
                  Cửa hàng
                  <ChevronDown size={20} color="#222222" />
                </li>

                <li className="text-[16px] text-[text2222] flex justify-center items-center font-medium">
                  Nông sản
                  <ChevronDown size={20} color="#222222" />
                </li>

                <li className="text-[16px] text-[text2222] flex justify-center items-center font-medium">
                  Khuyến mãi
                  <ChevronDown size={20} color="#222222" />
                </li>

                <li className="text-[16px] text-[text2222] flex justify-center items-center font-medium">
                  Liên hệ
                  <ChevronDown size={20} color="#222222" />
                </li>
              </ul>
            </div>
            <div className="header-bottom-right">
              <button className="menu-list flex justify-start items-center gap-[15px] bg-lightGreen px-[28px] py-[14px] rounded-[5px]">
                <Zap size={24} color="#0DA487" />
                <span className="text-[18px] text-primaryGreen font-semibold">
                  Ưu đãi hôm nay
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* HEROES */}
      <div className="hearoes w-full h-auto">
        <div className="heroes-container w-[1280px] h-full m-auto py-[24px] flex justify-between gap-6">
          <div className="heroes-left relative w-[67%] ">
            <img className="w-full h-[495px]" src={HeroBg1} alt="" />
            <div className="content absolute top-[70px] left-[50px] flex flex-col gap-5">
              <div className="row-1 flex justify-start items-center gap-2">
                <h6 className="text-[14px] text-textGray font-[400]">
                  Ưu đãi độc quyền
                </h6>
                <span className="text-[14px] text-[#ff4f4f] font-[600] px-[15px] py-[10px] bg-[#FF727226] rounded-[50px]">
                  Giảm 30%
                </span>
              </div>
              <div className="row-2">
                <h1 className="text-[32px] text-text2222 font-semibold">
                  CUNG CẤP <br /> NHU CẦU HÀNG NGÀY <br /> CHO{" "}
                  <span className="text-primaryGreen">GIA ĐÌNH BẠN</span>
                </h1>
              </div>
              <div className="row-3">
                <p className="text-[14px] text-textGray font-[400]">
                  Rau củ quả chứa nhiều Vitamin và khoáng chất tốt cho sức khỏe
                </p>
              </div>
              <Link
                to=""
                className="text-[17px] text-white font-bold px-[28px] py-[13px] w-[169px] bg-secondaryRed hover:bg-red-500 transition flex justify-center items-center gap-2 rounded-[5px]"
              >
                Mua ngay
                <ArrowRight />
              </Link>
            </div>
          </div>
          <div className="heroes-right flex-1">
            <div className="flex flex-col gap-6">
              <div className="heroes-right-top relative w-full">
                <img src={HeroBg2} alt="" />
                <div className="content absolute top-[20px] left-[20px] flex flex-col gap-1">
                  <div className="row-1 flex justify-start items-center gap-2">
                    <h6 className="text-[35px] text-secondaryRed font-[600]">
                      45%
                    </h6>
                    <span className="text-[16px] text-text2222 font-[600]">
                      Giảm giá
                    </span>
                  </div>
                  <div className="row-2">
                    <h1 className="text-[32px] text-text2222 font-semibold">
                      <span className="text-primaryGreen">Hạt Giống</span>
                    </h1>
                  </div>
                  <div className="row-3">
                    <p className="text-[14px] text-textGray font-[400]">
                      Chúng tôi cung cấp rau và trái cây hữu cơ
                    </p>
                  </div>
                  <Link
                    to=""
                    className="text-[17px] text-text2222 hover:text-slate-900 hover:font-medium transition font-[400] py-[13px] flex justify-start items-center gap-2 rounded-[5px]"
                  >
                    Mua ngay
                    <ArrowRight />
                  </Link>
                </div>
              </div>

              <div className="heroes-right-top relative w-full">
                <img src={HeroBg3} alt="" />
                <div className="content absolute top-[20px] left-[20px] flex flex-col gap-1">
                  <div className="row-1 flex justify-start items-center gap-2">
                    <h6 className="text-[24px] text-primaryGreen font-[700]">
                      Thực phẩm <br /> lành mạnh
                    </h6>
                  </div>
                  <div className="row-2">
                    <h1 className="text-[20px] text-secondaryRed font-[500]">
                      Thị trường hữu cơ
                    </h1>
                  </div>
                  <div className="row-3">
                    <p className="text-[14px] text-textGray font-[400]">
                      Bắt đầu mua sắm <br /> các sản phẩm hữu cơ ngay
                    </p>
                  </div>
                  <Link
                    to=""
                    className="text-[17px] text-text2222 hover:text-slate-900 hover:font-medium transition font-[400] py-[13px] flex justify-start items-center gap-2 rounded-[5px]"
                  >
                    Mua ngay
                    <ArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="features w-full h-auto">
        <div className="features-container w-[1280px] h-auto pb-6 m-auto grid grid-cols-4 gap-x-[24px]">
          <div className="feature-item relative">
            <img src={Feature1} alt="" />
            <div className="content absolute top-[20px] left-0 flex flex-col gap-7">
              <div className="flex flex-col gap-[2px] pr-[56px] pl-[11px] py-[11px] bg-[#FFFFFF80] rounded-tr-[70px] rounded-br-[70px]">
                <h5 className="text-[14px] text-secondaryRed font-medium">
                  Giảm giá 5%
                </h5>
                <h4 className="text-[17px] text-text2222 font-semibold">
                  Ưu đãi hấp dẫn
                </h4>
                <h6 className="text-[17px] text-textGray font-[400]">
                  Thực phẩm thiết yếu
                </h6>
              </div>
              <Link
                to=""
                className="pl-[21px] text-[17px] text-white font-medium hover:font-bold transition flex justify-start items-center gap-2 rounded-[5px]"
              >
                Mua ngay
                <ArrowRight />
              </Link>
            </div>
          </div>

          <div className="feature-item relative">
            <img src={Feature2} alt="" />
            <div className="content absolute top-[20px] left-0 flex flex-col gap-7">
              <div className="flex flex-col gap-[2px] pr-[56px] pl-[11px] py-[11px] bg-[#FFFFFF80] rounded-tr-[70px] rounded-br-[70px]">
                <h5 className="text-[14px] text-secondaryRed font-medium">
                  Giảm giá 5%
                </h5>
                <h4 className="text-[17px] text-text2222 font-semibold">
                  Khuyến mãi nhiều hơn
                </h4>
                <h6 className="text-[17px] text-textGray font-[400]">
                  Trái cây tươi sạch
                </h6>
              </div>
              <Link
                to=""
                className="pl-[21px] text-[17px] text-white font-medium hover:font-bold transition flex justify-start items-center gap-2 rounded-[5px]"
              >
                Mua ngay
                <ArrowRight />
              </Link>
            </div>
          </div>

          <div className="feature-item relative">
            <img className="w-[301px] h-[185px]" src={Feature3} alt="" />
            <div className="content absolute top-[20px] left-0 flex flex-col gap-7">
              <div className="flex flex-col gap-[2px] pr-[56px] pl-[11px] py-[11px] bg-[#FFFFFF80] rounded-tr-[70px] rounded-br-[70px]">
                <h5 className="text-[14px] text-secondaryRed font-medium">
                  Giảm giá 5%
                </h5>
                <h4 className="text-[17px] text-text2222 font-semibold">
                  Lúa gạo chất lượng
                </h4>
                <h6 className="text-[17px] text-textGray font-[400]">
                  Giao hàng đến tận nhà
                </h6>
              </div>
              <Link
                to=""
                className="pl-[21px] text-[17px] text-white font-medium hover:font-bold transition flex justify-start items-center gap-2 rounded-[5px]"
              >
                Mua ngay
                <ArrowRight />
              </Link>
            </div>
          </div>

          <div className="feature-item relative">
            <img src={Feature4} alt="" />
            <div className="content absolute top-[20px] left-0 flex flex-col gap-7">
              <div className="flex flex-col gap-[2px] pr-[56px] pl-[11px] py-[11px] bg-[#FFFFFF80] rounded-tr-[70px] rounded-br-[70px]">
                <h5 className="text-[14px] text-secondaryRed font-medium">
                  Giảm giá 5%
                </h5>
                <h4 className="text-[17px] text-text2222 font-semibold">
                  Khuyến mãi mỗi ngày
                </h4>
                <h6 className="text-[17px] text-textGray font-[400]">
                  Quả hạt và đồ ăn nhẹ
                </h6>
              </div>
              <Link
                to=""
                className="pl-[21px] text-[17px] text-white font-medium hover:font-bold transition flex justify-start items-center gap-2 rounded-[5px]"
              >
                Mua ngay
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="main-content w-full h-auto border border-green">
        <div className="main-content-container w-[1280px] h-auto bg-slate-300 m-auto flex gap-6">
          <div className="main-content-left flex flex-col gap-6 w-[300px] h-full bg-red-300">
            {/* All Category */}
            <div className="categories w-full p-6 h-auto bg-backgroundLightGray rounded-[5px]">
              <div className="title">
                {" "}
                <h3 className="text-[19px] text-text2222 font-semibold">
                  Tất cả danh mục
                </h3>
                <div className="w-[100px] h-[2px] bg-primaryGreen mt-[2px]"></div>
              </div>

              <ul className="item-category flex flex-col gap-[24px] pt-[24px]">
                {CategoryData.map((category, index) => (
                  <li key={index}>
                    <Link
                      to=""
                      className="flex justify-start items-center gap-3"
                    >
                      <img
                        className="w-[25px] h-[25px]"
                        src={category.image}
                        alt={category.name}
                      />
                      <p className="text-[16px] text-text2222 font-[400]">
                        {category.name}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Banner Rau củ quả */}
            <div className="banner1 relative">
              <img className="rounded-[5px]" src={Banner1} alt="" />
              <div className="content absolute top-[30px] left-6 flex flex-col gap-1">
                <h4 className="text-[21px] text-yellow font-medium">Hữu cơ</h4>
                <h2 className="text-[32px] text-primaryGreen font-bold">
                  Rau củ quả
                </h2>
                <h2 className="text-[32px] text-text2222 font-[400]">
                  Siêu sạch
                </h2>
                <p className="text-[14px] text-textGray font-[400]">
                  Giảm giá lên đến 50%
                </p>
                <Link
                  to=""
                  className="mt-[20px] text-[17px] text-white font-bold px-[28px] py-[13px] w-[169px] bg-secondaryRed hover:bg-red-500 transition flex justify-center items-center gap-2 rounded-[5px]"
                >
                  Mua ngay
                  <ArrowRight />
                </Link>
              </div>
            </div>

            {/* Banner Gạo */}
            <div className="banner1 relative">
              <img className="rounded-[5px]" src={Banner2} alt="" />
              <div className="content absolute top-[30px] left-6 flex flex-col gap-1">
                <h4 className="text-[21px] text-yellow font-medium">
                  Nông nghiệp
                </h4>
                <h2 className="text-[32px] text-primaryGreen font-bold">
                  Tinh hoa hội tụ
                </h2>
                <p className="text-[14px] text-textGray font-[400]">
                  Trong từng hạt gạo Việt Nam
                </p>
                <Link
                  to=""
                  className="mt-[20px] text-[17px] text-white font-bold px-[28px] py-[13px] w-[169px] bg-secondaryRed hover:bg-red-500 transition flex justify-center items-center gap-2 rounded-[5px]"
                >
                  Mua ngay
                  <ArrowRight />
                </Link>
              </div>
            </div>

            {/* Sản phẩm nổi bật */}
            <div className="products w-full p-6 h-auto bg-backgroundLightGray rounded-[5px]">
              <div className="title">
                {" "}
                <h3 className="text-[19px] text-text2222 font-semibold">
                  Sản phẩm nổi bật
                </h3>
                <div className="w-[100px] h-[2px] bg-primaryGreen mt-[2px]"></div>
              </div>

              <ul className="item-product flex flex-col gap-[24px] pt-[24px]">
                {ProductData.map((product, index) => (
                  <li key={index}>
                    <Link
                      to=""
                      className="flex justify-start items-center gap-3"
                    >
                      <img
                        className="w-[70px] h-[70px] object-cover"
                        src={product.image}
                        alt={product.name}
                      />
                      <div className="info">
                        <h5 className="text-[14px] text-text2222 font-[600]">
                          {product.name}
                        </h5>
                        <p className="text-[14px] text-textGray font-[400]">
                          {product.unit}
                        </p>
                        <h4 className="text-[14px] text-primaryGreen font-[600]">
                          {product.price}
                        </h4>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="main-content-right flex-1 h-full">
            {/* Giá tốt hôm nay */}
            <div className="good-price">
              <div className="good-price-title flex justify-between items-center">
                <div className="">
                  <h2 className="text-[24px] text-text2222 font-bold">
                    Giá tốt nhất hôm nay
                  </h2>
                  <div className="flex justify-start items-center gap-1">
                    <div className="w-[60px] h-[3px] bg-primaryGreen"></div>
                    <img src={Seedling} alt="" />
                    <div className="w-[60px] h-[3px] bg-primaryGreen"></div>
                  </div>
                  <p className="text-[14px] text-textGray font-[400]">
                    Đừng bỏ lỡ cơ hội giảm giá đặc biệt chỉ trong tuần này.
                  </p>
                </div>

                <div className="px-[12px] py-[10px] bg-secondaryRed flex justify-center items-center gap-2 rounded-[5px]">
                  <Clock size={20} color="white" />
                  <p className="text-[16px] text-white font-[500]">
                    Hết hạn vào: 14 : 23 : 01 : 11
                  </p>
                </div>
              </div>

              <div className="good-price-all-product py-[24px] border grid grid-cols-4">
                <Link className="item-product w-full flex flex-col items-center gap-3 p-3 border hover:border-primaryGreen transition">
                  <div className="w-[170px] h-[140px]">
                    <img
                      className="w-full h-full object-cover border"
                      src={ImageProduct}
                      alt=""
                    />
                  </div>

                  <h5 className="text-[16px] text-text2222 font-normal">
                    Cà chua xuất khẩu
                  </h5>
                  <div className="flex justify-between items-center gap-2">
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      13.000đ
                    </h6>
                    <p className="text-[14px] text-textGray font-[400] line-through">
                      20.000đ
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <div className="star text-[11px] text-yellow flex gap-1">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      Còn hàng
                    </h6>
                  </div>
                  <button className="relative w-full bg-lineGray hover:bg-slate-200 rounded-[50px] p-[8px] flex justify-center items-center gap-2 text-[16px] text-textGray font-[400] hover:text-text2222 transition">
                    Thêm
                    <div className="absolute right-1 rounded-[50px] p-[7px] bg-white">
                      <Plus size={18} color="#0DA487" />
                    </div>
                  </button>
                </Link>

                <Link className="item-product w-full flex flex-col items-center gap-3 p-3 border hover:border-primaryGreen transition">
                  <div className="w-[170px] h-[140px]">
                    <img
                      className="w-full h-full object-cover border"
                      src={ImageProduct}
                      alt=""
                    />
                  </div>

                  <h5 className="text-[16px] text-text2222 font-normal">
                    Cà chua xuất khẩu
                  </h5>
                  <div className="flex justify-between items-center gap-2">
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      13.000đ
                    </h6>
                    <p className="text-[14px] text-textGray font-[400] line-through">
                      20.000đ
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <div className="star text-[11px] text-yellow flex gap-1">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      Còn hàng
                    </h6>
                  </div>
                  <button className="relative w-full bg-lineGray hover:bg-slate-200 rounded-[50px] p-[8px] flex justify-center items-center gap-2 text-[16px] text-textGray font-[400] hover:text-text2222 transition">
                    Thêm
                    <div className="absolute right-1 rounded-[50px] p-[7px] bg-white">
                      <Plus size={18} color="#0DA487" />
                    </div>
                  </button>
                </Link>

                <Link className="item-product w-full flex flex-col items-center gap-3 p-3 border hover:border-primaryGreen transition">
                  <div className="w-[170px] h-[140px]">
                    <img
                      className="w-full h-full object-cover border"
                      src={ImageProduct}
                      alt=""
                    />
                  </div>

                  <h5 className="text-[16px] text-text2222 font-normal">
                    Cà chua xuất khẩu
                  </h5>
                  <div className="flex justify-between items-center gap-2">
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      13.000đ
                    </h6>
                    <p className="text-[14px] text-textGray font-[400] line-through">
                      20.000đ
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <div className="star text-[11px] text-yellow flex gap-1">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      Còn hàng
                    </h6>
                  </div>
                  <button className="relative w-full bg-lineGray hover:bg-slate-200 rounded-[50px] p-[8px] flex justify-center items-center gap-2 text-[16px] text-textGray font-[400] hover:text-text2222 transition">
                    Thêm
                    <div className="absolute right-1 rounded-[50px] p-[7px] bg-white">
                      <Plus size={18} color="#0DA487" />
                    </div>
                  </button>
                </Link>

                <Link className="item-product w-full flex flex-col items-center gap-3 p-3 border hover:border-primaryGreen transition">
                  <div className="w-[170px] h-[140px]">
                    <img
                      className="w-full h-full object-cover border"
                      src={ImageProduct}
                      alt=""
                    />
                  </div>

                  <h5 className="text-[16px] text-text2222 font-normal">
                    Cà chua xuất khẩu
                  </h5>
                  <div className="flex justify-between items-center gap-2">
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      13.000đ
                    </h6>
                    <p className="text-[14px] text-textGray font-[400] line-through">
                      20.000đ
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <div className="star text-[11px] text-yellow flex gap-1">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      Còn hàng
                    </h6>
                  </div>
                  <button className="relative w-full bg-lineGray hover:bg-slate-200 rounded-[50px] p-[8px] flex justify-center items-center gap-2 text-[16px] text-textGray font-[400] hover:text-text2222 transition">
                    Thêm
                    <div className="absolute right-1 rounded-[50px] p-[7px] bg-white">
                      <Plus size={18} color="#0DA487" />
                    </div>
                  </button>
                </Link>

                <Link className="item-product w-full flex flex-col items-center gap-3 p-3 border hover:border-primaryGreen transition">
                  <div className="w-[170px] h-[140px]">
                    <img
                      className="w-full h-full object-cover border"
                      src={ImageProduct}
                      alt=""
                    />
                  </div>

                  <h5 className="text-[16px] text-text2222 font-normal">
                    Cà chua xuất khẩu
                  </h5>
                  <div className="flex justify-between items-center gap-2">
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      13.000đ
                    </h6>
                    <p className="text-[14px] text-textGray font-[400] line-through">
                      20.000đ
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <div className="star text-[11px] text-yellow flex gap-1">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      Còn hàng
                    </h6>
                  </div>
                  <button className="relative w-full bg-lineGray hover:bg-slate-200 rounded-[50px] p-[8px] flex justify-center items-center gap-2 text-[16px] text-textGray font-[400] hover:text-text2222 transition">
                    Thêm
                    <div className="absolute right-1 rounded-[50px] p-[7px] bg-white">
                      <Plus size={18} color="#0DA487" />
                    </div>
                  </button>
                </Link>

                <Link className="item-product w-full flex flex-col items-center gap-3 p-3 border hover:border-primaryGreen transition">
                  <div className="w-[170px] h-[140px]">
                    <img
                      className="w-full h-full object-cover border"
                      src={ImageProduct}
                      alt=""
                    />
                  </div>

                  <h5 className="text-[16px] text-text2222 font-normal">
                    Cà chua xuất khẩu
                  </h5>
                  <div className="flex justify-between items-center gap-2">
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      13.000đ
                    </h6>
                    <p className="text-[14px] text-textGray font-[400] line-through">
                      20.000đ
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <div className="star text-[11px] text-yellow flex gap-1">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      Còn hàng
                    </h6>
                  </div>
                  <button className="relative w-full bg-lineGray hover:bg-slate-200 rounded-[50px] p-[8px] flex justify-center items-center gap-2 text-[16px] text-textGray font-[400] hover:text-text2222 transition">
                    Thêm
                    <div className="absolute right-1 rounded-[50px] p-[7px] bg-white">
                      <Plus size={18} color="#0DA487" />
                    </div>
                  </button>
                </Link>

                <Link className="item-product w-full flex flex-col items-center gap-3 p-3 border hover:border-primaryGreen transition">
                  <div className="w-[170px] h-[140px]">
                    <img
                      className="w-full h-full object-cover border"
                      src={ImageProduct}
                      alt=""
                    />
                  </div>

                  <h5 className="text-[16px] text-text2222 font-normal">
                    Cà chua xuất khẩu
                  </h5>
                  <div className="flex justify-between items-center gap-2">
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      13.000đ
                    </h6>
                    <p className="text-[14px] text-textGray font-[400] line-through">
                      20.000đ
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <div className="star text-[11px] text-yellow flex gap-1">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      Còn hàng
                    </h6>
                  </div>
                  <button className="relative w-full bg-lineGray hover:bg-slate-200 rounded-[50px] p-[8px] flex justify-center items-center gap-2 text-[16px] text-textGray font-[400] hover:text-text2222 transition">
                    Thêm
                    <div className="absolute right-1 rounded-[50px] p-[7px] bg-white">
                      <Plus size={18} color="#0DA487" />
                    </div>
                  </button>
                </Link>

                <Link className="item-product w-full flex flex-col items-center gap-3 p-3 border hover:border-primaryGreen transition">
                  <div className="w-[170px] h-[140px]">
                    <img
                      className="w-full h-full object-cover border"
                      src={ImageProduct}
                      alt=""
                    />
                  </div>

                  <h5 className="text-[16px] text-text2222 font-normal">
                    Cà chua xuất khẩu
                  </h5>
                  <div className="flex justify-between items-center gap-2">
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      13.000đ
                    </h6>
                    <p className="text-[14px] text-textGray font-[400] line-through">
                      20.000đ
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <div className="star text-[11px] text-yellow flex gap-1">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      Còn hàng
                    </h6>
                  </div>
                  <button className="relative w-full bg-lineGray hover:bg-slate-200 rounded-[50px] p-[8px] flex justify-center items-center gap-2 text-[16px] text-textGray font-[400] hover:text-text2222 transition">
                    Thêm
                    <div className="absolute right-1 rounded-[50px] p-[7px] bg-white">
                      <Plus size={18} color="#0DA487" />
                    </div>
                  </button>
                </Link>
              </div>
            </div>

            {/* Banner rau củ quả */}
            <div className="banner-rau-cu-qua relative">
              <img className="rounded-[5px]" src={BannerRauCuQua} alt="" />
              <div className="content absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-center">
                <h6 className="text-[14px] text-primaryGreen font-normal">
                  Mùa vụ đã đến
                </h6>
                <h2 className="text-[32px] text-text2222 font-[700]">
                  RAU CỦ QUẢ
                </h2>
                <p className="text-[14px] text-textGray font-normal mb-[20px]">
                  Tiết kiệm đến 5%
                </p>
                <Link
                  to=""
                  className="m-auto text-[17px] text-white font-bold px-[28px] py-[13px] w-[169px] bg-secondaryRed hover:bg-red-500 transition flex justify-center items-center gap-2 rounded-[5px]"
                >
                  Mua ngay
                  <ArrowRight />
                </Link>
              </div>
            </div>

            {/* Tất cả dạnh mục */}
            <div className="all-category">
              <div className="good-price-title flex justify-between items-center">
                <div className="py-[24px]">
                  <h2 className="text-[24px] text-text2222 font-bold">
                    Tất cả danh mục
                  </h2>
                  <div className="flex justify-start items-center gap-1">
                    <div className="w-[60px] h-[3px] bg-primaryGreen"></div>
                    <img src={Seedling} alt="" />
                    <div className="w-[60px] h-[3px] bg-primaryGreen"></div>
                  </div>
                  <p className="text-[14px] text-textGray font-[400]">
                    Danh mục hàng đầu trong tuần.
                  </p>
                </div>

                <div className="hidden px-[12px] py-[10px] bg-secondaryRed justify-center items-center gap-2 rounded-[5px]">
                  <Clock size={20} color="white" />
                  <p className="text-[16px] text-white font-[500]">
                    Hết hạn vào: 14 : 23 : 01 : 11
                  </p>
                </div>
              </div>

              <div className="good-price-all-product border h-[135px]">
                <ul className="grid grid-cols-5 gap-x-6 h-full">
                  {CategoryData.map((category, index) => (
                    <li key={index}>
                      <Link
                        to=""
                        className="rounded-[5px] w-full h-full flex flex-col justify-center items-center gap-3 bg-backgroundLightGray"
                      >
                        <img
                          className="w-[36px] h-[36px]"
                          src={category.image}
                          alt={category.name}
                        />
                        <p className="text-[16px] text-text2222 font-[400]">
                          {category.name}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 2 Banner Rau và Nấm */}
            <div className="2-banner-rau-nam grid grid-cols-2 gap-x-6 py-[24px]">
              <div className="banner-rau-cu-qua relative">
                <img
                  className="rounded-[5px] w-full h-full"
                  src={BannerRauQua}
                  alt=""
                />
                <div className="content absolute top-[16px] left-[24px] text-left">
                  <h6 className="text-[24px] text-textBlack font-[500]">
                    Ưu đãi 50%
                  </h6>
                  <h2 className="text-[24px] text-primaryGreen font-[900]">
                    Rau quả hợp vệ sinh
                  </h2>
                  <Link
                    to=""
                    className="mt-[12px] text-[17px] text-white font-bold px-[28px] py-[13px] w-[169px] bg-secondaryRed hover:bg-red-500 transition flex justify-center items-center gap-2 rounded-[5px]"
                  >
                    Mua ngay
                    <ArrowRight />
                  </Link>
                </div>
              </div>
              <div className="banner-rau-cu-qua relative">
                <img
                  className="rounded-[5px] w-full h-full"
                  src={BannerNam}
                  alt=""
                />
                <div className="content absolute top-[16px] left-[24px] text-left">
                  <h6 className="text-[24px] text-textBlack font-[500]">
                    Ưu đãi 50%
                  </h6>
                  <h2 className="text-[24px] text-primaryGreen font-[900]">
                    Nấm chất lượng
                  </h2>
                  <Link
                    to=""
                    className="mt-[12px] text-[17px] text-white font-bold px-[28px] py-[13px] w-[169px] bg-secondaryRed hover:bg-red-500 transition flex justify-center items-center gap-2 rounded-[5px]"
                  >
                    Mua ngay
                    <ArrowRight />
                  </Link>
                </div>
              </div>
            </div>

            {/* Dành cho bạn */}
            <div className="good-price">
              <div className="good-price-title flex justify-between items-center">
                <div className="">
                  <h2 className="text-[24px] text-text2222 font-bold">
                    Dành cho bạn
                  </h2>
                  <div className="flex justify-start items-center gap-1">
                    <div className="w-[60px] h-[3px] bg-primaryGreen"></div>
                    <img src={Seedling} alt="" />
                    <div className="w-[60px] h-[3px] bg-primaryGreen"></div>
                  </div>
                  <p className="text-[14px] text-textGray font-[400]">
                    Lựa chọn thực phẩm cần thiết cho gia đình của bạn.{" "}
                  </p>
                </div>

                <div className="px-[12px] py-[10px] bg-secondaryRed hidden justify-center items-center gap-2 rounded-[5px]">
                  <Clock size={20} color="white" />
                  <p className="text-[16px] text-white font-[500]">
                    Hết hạn vào: 14 : 23 : 01 : 11
                  </p>
                </div>
              </div>

              <div className="good-price-all-product py-[24px] border grid grid-cols-4">
                <Link className="item-product w-full flex flex-col items-center gap-3 p-3 border hover:border-primaryGreen transition">
                  <div className="w-[170px] h-[140px]">
                    <img
                      className="w-full h-full object-cover border"
                      src={ImageProduct}
                      alt=""
                    />
                  </div>

                  <h5 className="text-[16px] text-text2222 font-normal">
                    Cà chua xuất khẩu
                  </h5>
                  <div className="flex justify-between items-center gap-2">
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      13.000đ
                    </h6>
                    <p className="text-[14px] text-textGray font-[400] line-through">
                      20.000đ
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <div className="star text-[11px] text-yellow flex gap-1">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      Còn hàng
                    </h6>
                  </div>
                  <button className="relative w-full bg-lineGray hover:bg-slate-200 rounded-[50px] p-[8px] flex justify-center items-center gap-2 text-[16px] text-textGray font-[400] hover:text-text2222 transition">
                    Thêm
                    <div className="absolute right-1 rounded-[50px] p-[7px] bg-white">
                      <Plus size={18} color="#0DA487" />
                    </div>
                  </button>
                </Link>

                <Link className="item-product w-full flex flex-col items-center gap-3 p-3 border hover:border-primaryGreen transition">
                  <div className="w-[170px] h-[140px]">
                    <img
                      className="w-full h-full object-cover border"
                      src={ImageProduct}
                      alt=""
                    />
                  </div>

                  <h5 className="text-[16px] text-text2222 font-normal">
                    Cà chua xuất khẩu
                  </h5>
                  <div className="flex justify-between items-center gap-2">
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      13.000đ
                    </h6>
                    <p className="text-[14px] text-textGray font-[400] line-through">
                      20.000đ
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <div className="star text-[11px] text-yellow flex gap-1">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      Còn hàng
                    </h6>
                  </div>
                  <button className="relative w-full bg-lineGray hover:bg-slate-200 rounded-[50px] p-[8px] flex justify-center items-center gap-2 text-[16px] text-textGray font-[400] hover:text-text2222 transition">
                    Thêm
                    <div className="absolute right-1 rounded-[50px] p-[7px] bg-white">
                      <Plus size={18} color="#0DA487" />
                    </div>
                  </button>
                </Link>

                <Link className="item-product w-full flex flex-col items-center gap-3 p-3 border hover:border-primaryGreen transition">
                  <div className="w-[170px] h-[140px]">
                    <img
                      className="w-full h-full object-cover border"
                      src={ImageProduct}
                      alt=""
                    />
                  </div>

                  <h5 className="text-[16px] text-text2222 font-normal">
                    Cà chua xuất khẩu
                  </h5>
                  <div className="flex justify-between items-center gap-2">
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      13.000đ
                    </h6>
                    <p className="text-[14px] text-textGray font-[400] line-through">
                      20.000đ
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <div className="star text-[11px] text-yellow flex gap-1">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      Còn hàng
                    </h6>
                  </div>
                  <button className="relative w-full bg-lineGray hover:bg-slate-200 rounded-[50px] p-[8px] flex justify-center items-center gap-2 text-[16px] text-textGray font-[400] hover:text-text2222 transition">
                    Thêm
                    <div className="absolute right-1 rounded-[50px] p-[7px] bg-white">
                      <Plus size={18} color="#0DA487" />
                    </div>
                  </button>
                </Link>

                <Link className="item-product w-full flex flex-col items-center gap-3 p-3 border hover:border-primaryGreen transition">
                  <div className="w-[170px] h-[140px]">
                    <img
                      className="w-full h-full object-cover border"
                      src={ImageProduct}
                      alt=""
                    />
                  </div>

                  <h5 className="text-[16px] text-text2222 font-normal">
                    Cà chua xuất khẩu
                  </h5>
                  <div className="flex justify-between items-center gap-2">
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      13.000đ
                    </h6>
                    <p className="text-[14px] text-textGray font-[400] line-through">
                      20.000đ
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <div className="star text-[11px] text-yellow flex gap-1">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      Còn hàng
                    </h6>
                  </div>
                  <button className="relative w-full bg-lineGray hover:bg-slate-200 rounded-[50px] p-[8px] flex justify-center items-center gap-2 text-[16px] text-textGray font-[400] hover:text-text2222 transition">
                    Thêm
                    <div className="absolute right-1 rounded-[50px] p-[7px] bg-white">
                      <Plus size={18} color="#0DA487" />
                    </div>
                  </button>
                </Link>

                <Link className="item-product w-full flex flex-col items-center gap-3 p-3 border hover:border-primaryGreen transition">
                  <div className="w-[170px] h-[140px]">
                    <img
                      className="w-full h-full object-cover border"
                      src={ImageProduct}
                      alt=""
                    />
                  </div>

                  <h5 className="text-[16px] text-text2222 font-normal">
                    Cà chua xuất khẩu
                  </h5>
                  <div className="flex justify-between items-center gap-2">
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      13.000đ
                    </h6>
                    <p className="text-[14px] text-textGray font-[400] line-through">
                      20.000đ
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <div className="star text-[11px] text-yellow flex gap-1">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      Còn hàng
                    </h6>
                  </div>
                  <button className="relative w-full bg-lineGray hover:bg-slate-200 rounded-[50px] p-[8px] flex justify-center items-center gap-2 text-[16px] text-textGray font-[400] hover:text-text2222 transition">
                    Thêm
                    <div className="absolute right-1 rounded-[50px] p-[7px] bg-white">
                      <Plus size={18} color="#0DA487" />
                    </div>
                  </button>
                </Link>

                <Link className="item-product w-full flex flex-col items-center gap-3 p-3 border hover:border-primaryGreen transition">
                  <div className="w-[170px] h-[140px]">
                    <img
                      className="w-full h-full object-cover border"
                      src={ImageProduct}
                      alt=""
                    />
                  </div>

                  <h5 className="text-[16px] text-text2222 font-normal">
                    Cà chua xuất khẩu
                  </h5>
                  <div className="flex justify-between items-center gap-2">
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      13.000đ
                    </h6>
                    <p className="text-[14px] text-textGray font-[400] line-through">
                      20.000đ
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <div className="star text-[11px] text-yellow flex gap-1">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      Còn hàng
                    </h6>
                  </div>
                  <button className="relative w-full bg-lineGray hover:bg-slate-200 rounded-[50px] p-[8px] flex justify-center items-center gap-2 text-[16px] text-textGray font-[400] hover:text-text2222 transition">
                    Thêm
                    <div className="absolute right-1 rounded-[50px] p-[7px] bg-white">
                      <Plus size={18} color="#0DA487" />
                    </div>
                  </button>
                </Link>

                <Link className="item-product w-full flex flex-col items-center gap-3 p-3 border hover:border-primaryGreen transition">
                  <div className="w-[170px] h-[140px]">
                    <img
                      className="w-full h-full object-cover border"
                      src={ImageProduct}
                      alt=""
                    />
                  </div>

                  <h5 className="text-[16px] text-text2222 font-normal">
                    Cà chua xuất khẩu
                  </h5>
                  <div className="flex justify-between items-center gap-2">
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      13.000đ
                    </h6>
                    <p className="text-[14px] text-textGray font-[400] line-through">
                      20.000đ
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <div className="star text-[11px] text-yellow flex gap-1">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      Còn hàng
                    </h6>
                  </div>
                  <button className="relative w-full bg-lineGray hover:bg-slate-200 rounded-[50px] p-[8px] flex justify-center items-center gap-2 text-[16px] text-textGray font-[400] hover:text-text2222 transition">
                    Thêm
                    <div className="absolute right-1 rounded-[50px] p-[7px] bg-white">
                      <Plus size={18} color="#0DA487" />
                    </div>
                  </button>
                </Link>

                <Link className="item-product w-full flex flex-col items-center gap-3 p-3 border hover:border-primaryGreen transition">
                  <div className="w-[170px] h-[140px]">
                    <img
                      className="w-full h-full object-cover border"
                      src={ImageProduct}
                      alt=""
                    />
                  </div>

                  <h5 className="text-[16px] text-text2222 font-normal">
                    Cà chua xuất khẩu
                  </h5>
                  <div className="flex justify-between items-center gap-2">
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      13.000đ
                    </h6>
                    <p className="text-[14px] text-textGray font-[400] line-through">
                      20.000đ
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <div className="star text-[11px] text-yellow flex gap-1">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      Còn hàng
                    </h6>
                  </div>
                  <button className="relative w-full bg-lineGray hover:bg-slate-200 rounded-[50px] p-[8px] flex justify-center items-center gap-2 text-[16px] text-textGray font-[400] hover:text-text2222 transition">
                    Thêm
                    <div className="absolute right-1 rounded-[50px] p-[7px] bg-white">
                      <Plus size={18} color="#0DA487" />
                    </div>
                  </button>
                </Link>

                <Link className="item-product w-full flex flex-col items-center gap-3 p-3 border hover:border-primaryGreen transition">
                  <div className="w-[170px] h-[140px]">
                    <img
                      className="w-full h-full object-cover border"
                      src={ImageProduct}
                      alt=""
                    />
                  </div>

                  <h5 className="text-[16px] text-text2222 font-normal">
                    Cà chua xuất khẩu
                  </h5>
                  <div className="flex justify-between items-center gap-2">
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      13.000đ
                    </h6>
                    <p className="text-[14px] text-textGray font-[400] line-through">
                      20.000đ
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <div className="star text-[11px] text-yellow flex gap-1">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      Còn hàng
                    </h6>
                  </div>
                  <button className="relative w-full bg-lineGray hover:bg-slate-200 rounded-[50px] p-[8px] flex justify-center items-center gap-2 text-[16px] text-textGray font-[400] hover:text-text2222 transition">
                    Thêm
                    <div className="absolute right-1 rounded-[50px] p-[7px] bg-white">
                      <Plus size={18} color="#0DA487" />
                    </div>
                  </button>
                </Link>

                <Link className="item-product w-full flex flex-col items-center gap-3 p-3 border hover:border-primaryGreen transition">
                  <div className="w-[170px] h-[140px]">
                    <img
                      className="w-full h-full object-cover border"
                      src={ImageProduct}
                      alt=""
                    />
                  </div>

                  <h5 className="text-[16px] text-text2222 font-normal">
                    Cà chua xuất khẩu
                  </h5>
                  <div className="flex justify-between items-center gap-2">
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      13.000đ
                    </h6>
                    <p className="text-[14px] text-textGray font-[400] line-through">
                      20.000đ
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <div className="star text-[11px] text-yellow flex gap-1">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      Còn hàng
                    </h6>
                  </div>
                  <button className="relative w-full bg-lineGray hover:bg-slate-200 rounded-[50px] p-[8px] flex justify-center items-center gap-2 text-[16px] text-textGray font-[400] hover:text-text2222 transition">
                    Thêm
                    <div className="absolute right-1 rounded-[50px] p-[7px] bg-white">
                      <Plus size={18} color="#0DA487" />
                    </div>
                  </button>
                </Link>

                <Link className="item-product w-full flex flex-col items-center gap-3 p-3 border hover:border-primaryGreen transition">
                  <div className="w-[170px] h-[140px]">
                    <img
                      className="w-full h-full object-cover border"
                      src={ImageProduct}
                      alt=""
                    />
                  </div>

                  <h5 className="text-[16px] text-text2222 font-normal">
                    Cà chua xuất khẩu
                  </h5>
                  <div className="flex justify-between items-center gap-2">
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      13.000đ
                    </h6>
                    <p className="text-[14px] text-textGray font-[400] line-through">
                      20.000đ
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <div className="star text-[11px] text-yellow flex gap-1">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      Còn hàng
                    </h6>
                  </div>
                  <button className="relative w-full bg-lineGray hover:bg-slate-200 rounded-[50px] p-[8px] flex justify-center items-center gap-2 text-[16px] text-textGray font-[400] hover:text-text2222 transition">
                    Thêm
                    <div className="absolute right-1 rounded-[50px] p-[7px] bg-white">
                      <Plus size={18} color="#0DA487" />
                    </div>
                  </button>
                </Link>

                <Link className="item-product w-full flex flex-col items-center gap-3 p-3 border hover:border-primaryGreen transition">
                  <div className="w-[170px] h-[140px]">
                    <img
                      className="w-full h-full object-cover border"
                      src={ImageProduct}
                      alt=""
                    />
                  </div>

                  <h5 className="text-[16px] text-text2222 font-normal">
                    Cà chua xuất khẩu
                  </h5>
                  <div className="flex justify-between items-center gap-2">
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      13.000đ
                    </h6>
                    <p className="text-[14px] text-textGray font-[400] line-through">
                      20.000đ
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <div className="star text-[11px] text-yellow flex gap-1">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <h6 className="text-[15px] text-primaryGreen font-[600]">
                      Còn hàng
                    </h6>
                  </div>
                  <button className="relative w-full bg-lineGray hover:bg-slate-200 rounded-[50px] p-[8px] flex justify-center items-center gap-2 text-[16px] text-textGray font-[400] hover:text-text2222 transition">
                    Thêm
                    <div className="absolute right-1 rounded-[50px] p-[7px] bg-white">
                      <Plus size={18} color="#0DA487" />
                    </div>
                  </button>
                </Link>
              </div>

              <div className="see-more">
                <Link
                  to=""
                  className="m-auto rounded-[50px] text-[16px] text-primaryGreen font-medium hover:font-semibold flex justify-center items-center bg-lightGreen hover:bg-green-100 transition p-[10px] w-[126px]"
                >
                  Xem thêm
                  <ChevronDown />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Đăng ký thông báo */}
      <div className="send-email w-full h-auto">
        <div className="send-email-container w-[1280px] h-auto m-auto">
          <div className="send-email relative py-[24px]">
            <img className="w-full" src={BgSendEmail} alt="" />
            <div className="content absolute top-[50%] left-[210px] translate-y-[-50%]">
              <h2 className="text-[24px] text-white font-bold">
                Đăng ký để nhận được nhiều thông báo mới
              </h2>
              <h5 className="text-[16px] text-yellow font-[600]">
                Đăng ký để nhận được nhiều thông báo mới
              </h5>
              <form action="">
                <div className="relative">
                  <div className="top-[50%] left-[5px] translate-y-[-50%] absolute p-[8px] bg-lightGreen rounded-[5px] text-primaryGreen">
                    <Mail size={20} />
                  </div>
                  <input
                    className="outline-primaryGreen w-[500px] py-[13px] pl-[45px] pr-[140px] rounded-[5px]"
                    type="text"
                    placeholder="Nhập email của bạn..."
                  />
                  <Link
                    to=""
                    className="absolute top-[50%] right-[10px] translate-y-[-50%] text-[17px] text-white font-bold px-[28px] py-[8px] w-[169px] bg-secondaryRed hover:bg-red-500 transition flex justify-center items-center gap-2 rounded-[5px]"
                  >
                    Đăng ký
                    <ArrowRight />
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer w-full h-auto border">
        <div className="footer-container w-[1280px] h-[500px] bg-slate-200 m-auto">
          {/* Footer Top */}
          <div className="footer-top grid grid-cols-4 py-[45px] border border-b-black">
            <div className="item flex justify-center items-center gap-3">
              <img src={IconProduct} alt="" />
              <h5 className="text-[16px] text-textBlack font-medium">
                Sản phẩm tươi sạch
              </h5>
            </div>

            <div className="item flex justify-center items-center gap-3">
              <img src={IconDelivery} alt="" />
              <h5 className="text-[16px] text-textBlack font-medium">
                Giao hàng miễn phí
              </h5>
            </div>

            <div className="item flex justify-center items-center gap-3">
              <img src={IconDiscount} alt="" />
              <h5 className="text-[16px] text-textBlack font-medium">
                Giảm giá lớn hằng ngày
              </h5>
            </div>

            <div className="item flex justify-center items-center gap-3">
              <img src={IconMarket} alt="" />
              <h5 className="text-[16px] text-textBlack font-medium">
                Giá tốt nhất trên thị trường
              </h5>
            </div>
          </div>

          {/* Footer Center */}
          <div className="footer-center grid grid-cols-5 py-[45px] border border-b-black">
            <div className="item flex flex-col justify-start items-start gap-3">
              <img src={Logo} alt="" />
              <h5 className="text-[16px] text-textBlack font-medium">
                Chúng tôi tự hào cung cấp một trải nghiệm mua sắm độc đáo, tập
                trung vào việc cung cấp những sản phẩm nông sản sạch, an toàn và
                đạt chuẩn hữu cơ.
              </h5>
              <div className="">
                <p>3/2, Xuân Khánh, Ninh Kiều, Cần Thơ</p>
              </div>
            </div>

            <div className="item flex justify-center items-center gap-3">
              <img src={IconDelivery} alt="" />
              <h5 className="text-[16px] text-textBlack font-medium">
                Giao hàng miễn phí
              </h5>
            </div>

            <div className="item flex justify-center items-center gap-3">
              <img src={IconDiscount} alt="" />
              <h5 className="text-[16px] text-textBlack font-medium">
                Giảm giá lớn hằng ngày
              </h5>
            </div>

            <div className="item flex justify-center items-center gap-3">
              <img src={IconMarket} alt="" />
              <h5 className="text-[16px] text-textBlack font-medium">
                Giá tốt nhất trên thị trường
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
