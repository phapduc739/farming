import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import IconProduct from "../../../assets/images/product.svg";
import IconDelivery from "../../../assets/images/delivery.svg";
import IconDiscount from "../../../assets/images/discount.svg";
import IconMarket from "../../../assets/images/market.svg";
import PayIcon from "../../../assets/images/pay.png";
import ConnectIcon from "../../../assets/images/connect.png";

export default function Footer() {
  return (
    <>
      <div className="footer w-full h-auto bg-backgroundLightGray">
        <div className="footer-container w-[1280px] h-auto m-auto">
          {/* Footer Top */}
          <div className="footer-top grid grid-cols-4 py-[45px] border-b border-b-black border-dashed">
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
          <div className="footer-center grid grid-cols-4 py-[45px] border-b border-b-black border-dashed">
            <div className="item flex flex-col justify-start items-start gap-6">
              <img src={Logo} alt="" />
              <div className="flex flex-col justify-start items-start gap-3">
                <h5 className="text-[16px] text-textBlack font-medium">
                  Chúng tôi tự hào cung cấp một trải nghiệm mua sắm độc đáo, tập
                  trung vào việc cung cấp những sản phẩm nông sản sạch, an toàn
                  và đạt chuẩn hữu cơ.
                </h5>
                <div className="flex justify-start items-center gap-2 text-[14px] text-textBlack">
                  <i className="fa-solid fa-house"></i>
                  <p className="text-textBlack font-normal">
                    Cao Thành, Ứng Hòa, Hà Nội
                  </p>
                </div>
                <div className="flex justify-start items-center gap-2 text-[14px] text-textBlack">
                  <i className="fa-solid fa-envelope"></i>
                  <p>support@farmersmarket.com</p>
                </div>
              </div>
            </div>

            <div className="item flex flex-col justify-start items-center gap-6">
              <h3 className="pl-[40px] text-[20px] text-textBlack font-[600]">
                Tất cả trang
              </h3>
              <div className="flex flex-col justify-start items-start gap-3">
                <Link to="/" className="text-[16px] text-textBlack font-normal">
                  Trang chủ
                </Link>
                <Link
                  to="/intro"
                  className="text-[16px] text-textBlack font-normal"
                >
                  Giới thiệu
                </Link>
                <Link to="" className="text-[16px] text-textBlack font-normal">
                  Tin tức
                </Link>
                <Link
                  to="/contact"
                  className="text-[16px] text-textBlack font-normal"
                >
                  Liên hệ
                </Link>
              </div>
            </div>

            <div className="item flex flex-col justify-start items-start gap-6">
              <h3 className="text-[20px] text-textBlack font-[600]">
                Danh mục
              </h3>
              <div className="flex flex-col justify-start items-start gap-3">
                <Link to="" className="text-[16px] text-textBlack font-normal">
                  Lúa mì và ngũ cốc
                </Link>
                <Link to="" className="text-[16px] text-textBlack font-normal">
                  Rau củ quả hữu cơ
                </Link>
                <Link to="" className="text-[16px] text-textBlack font-normal">
                  Hạt giống và cây trồng
                </Link>
                <Link to="" className="text-[16px] text-textBlack font-normal">
                  Thực phẩm chế biến sạch
                </Link>
                <Link to="" className="text-[16px] text-textBlack font-normal">
                  Thảo dược và gia vị
                </Link>
                <Link to="" className="text-[16px] text-textBlack font-normal">
                  Đặc sản khu vực
                </Link>
              </div>
            </div>

            <div className="item flex flex-col justify-start items-start gap-6">
              <h3 className="text-[20px] text-textBlack font-[600]">
                Trung tâm hỗ trợ
              </h3>
              <div className="flex flex-col justify-start items-start gap-3">
                <Link to="" className="text-[16px] text-textBlack font-normal">
                  Đơn hàng của bạn
                </Link>
                <Link to="" className="text-[16px] text-textBlack font-normal">
                  Tài khoản của bạn
                </Link>
                <Link to="" className="text-[16px] text-textBlack font-normal">
                  Theo dõi đơn hàng
                </Link>
                <Link to="" className="text-[16px] text-textBlack font-normal">
                  Sản phẩm yêu thích
                </Link>
                <Link
                  to="/faq"
                  className="text-[16px] text-textBlack font-normal"
                >
                  FAQ
                </Link>
              </div>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="footer-center grid grid-cols-3 py-[45px]">
            <div className="item flex flex-col justify-start items-start gap-6">
              <h5 className="text-[16px] text-textBlack font-medium">
                ©2023 Farmers Martket All rights reserved
              </h5>
            </div>

            <div className="item flex flex-col justify-start items-center gap-6">
              <div className="flex flex-col justify-start items-start gap-3">
                <img src={PayIcon} alt="" />
              </div>
            </div>

            <div className="item flex flex-col justify-start items-end gap-6">
              <div className="flex flex-col justify-start items-start gap-3">
                <img src={ConnectIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
