import { Link } from "react-router-dom";
import { ArrowRight } from "react-feather";
import HeroBg1 from "../../../assets/images/1 1.png";
import HeroBg2 from "../../../assets/images/2 1.png";
import HeroBg3 from "../../../assets/images/3 1.png";

export default function Heroes() {
  return (
    <>
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
    </>
  );
}
