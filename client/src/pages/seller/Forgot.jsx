import React from "react";
import Header from "../../components/common/Header";
import BgForgot from "../../assets/images/forgot.png";
import TitleForgot from "../../components/Title/TitleLForgot";

// import BgLogIn from '../assets/images/log-in-bg.png'
export default function Forgot() {
  console.log(Forgot);
  return (
    <>
      <Header />
      <TitleForgot />
      <section className="login-section py-10  flex relative items-center z-0 justify-center ">
        <div className="container-fluid-lg  ">
          <div className="row w-[100%]   mx-[-12px] flex relative ">
            <div className="left flex ">
              <div className="flex items-center justify-center h-full px-3 ml-[72px] ">
                <img src={BgForgot} />
              </div>
            </div>

            <div className="right  bg-them-gray px-3  ml-[72px] mr-[72px] px-3">
              <div className="log-in-box  px-10 py-10">
                <div className="log-in-title mb-2">
                  <h3 className="font-medium leading-tight m-0 text-20">
                    Chào mừng bạn đến với FamersMarket
                  </h3>
                  <h4 className="leading-6 m-0 font-normal text-[18px] mt-2">
                    Quên mật khẩu của bạn{" "}
                  </h4>
                </div>
                <div className="input-box ">
                  <form className="flex flex-col w-full">
                    <div className="from-floating relative mt-4 w-full">
                      <input
                        type="text"
                        className="w-full h-[50px] px-3 border outline-none"
                        id="email"
                        placeholder=""
                        required
                      />
                      <label
                        className="absolute top-1/2 left-3 -translate-y-1/2 bg-white px-1 text-gray-500 pointer-events-none "
                        htmlFor="email"
                      >
                        Email
                      </label>
                    </div>

                    <div className=" mt-4 log-in flex justify-center items-center w-full h-[50px] overflow-hidden transition-all duration-300 ease-in-out text-white rounded-lg font-semibold bg-red-600">
                      <button className="btn-sign" type="submit">
                        Đăng ký
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
