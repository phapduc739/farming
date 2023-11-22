import { Link } from "react-router-dom";
import { ArrowRight } from "react-feather";
import { ChevronDown } from "react-feather";
import { Clock } from "react-feather";
import { Plus } from "react-feather";
import ProductList from "./ProductList";
import ImageProduct from "../../../assets/images/cachua.png";
import BannerRauCuQua from "../../../assets/images/14.jpg";
import BannerRauQua from "../../../assets/images/Frame 92.png";
import BannerNam from "../../../assets/images/10.jpg";
import Banner1 from "../../../assets/images/banner1.jpg";
import Banner2 from "../../../assets/images/banner2.jpg";
import Seedling from "../../../assets/images/seedling.png";

export default function MainContent() {
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
  return (
    <>
      <div className="main-content w-full h-auto">
        <div className="main-content-container w-[1280px] h-auto m-auto flex gap-6">
          <div className="main-content-left flex flex-col gap-6 w-[300px] h-full">
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

              <div className="good-price-all-product py-[24px] grid grid-cols-4">
                <ProductList />
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

              <div className="good-price-all-product h-[135px]">
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
            <div className="for-you">
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

              <div className="good-price-all-product py-[24px] grid grid-cols-4">
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
    </>
  );
}
