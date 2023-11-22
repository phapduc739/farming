import { Link } from "react-router-dom";
import { ArrowRight } from "react-feather";
import Feature1 from "../../../assets/images/fe1.jpg";
import Feature2 from "../../../assets/images/fe2.jpg";
import Feature3 from "../../../assets/images/fe3.png";
import Feature4 from "../../../assets/images/fe4.jpg";

export default function Features() {
  return (
    <>
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
    </>
  );
}
