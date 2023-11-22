import { Link } from "react-router-dom";
import { Mail } from "react-feather";
import { ArrowRight } from "react-feather";
import BgSendEmail from "../../../assets/images/image 6.png";

export default function NewsLetter() {
  return (
    <>
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
    </>
  );
}
