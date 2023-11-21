import Header from "../../pages/user/common/Header";
import BgSignIn from "../../assets/images/sign-up.png";
import BgFacebook from "../../assets/images/facebook.png";
import BgGoogle from "../../assets/images/google.png";
import TitleSignUp from "../../components/Title/TitleSignUp";
// import BgLogIn from '../../assets/images/log-in-bg.png'
export default function Register() {
  return (
    <>
      <Header />
      <TitleSignUp />
      <section className="login-section py-10  flex relative items-center z-0 justify-center ">
        <div className="container-fluid-lg  ">
          <div className="row w-[100%]   mx-[-12px]  ">
            <div className=" relative m-auto flex w-full ">
              <div className="left flex ">
                <div className="flex items-center justify-center h-full px-3 ml-[72px] ">
                  <img src={BgSignIn} />
                </div>
              </div>

              <div className="right  bg-gray-200 px-3  ml-[72px] mr-[72px] px-3">
                <div className="log-in-box  px-10 py-10">
                  <div className="log-in-title mb-2">
                    <h3 className="font-medium leading-tight m-0 text-20">
                      Chào mừng bạn đến với FamersMarket
                    </h3>
                    <h4 className="leading-6 m-0 font-normal text-18 mt-2">
                      Đăng ký tài khoản{" "}
                    </h4>
                  </div>
                  <div className="input-box">
                    <form className="flex flex-col">
                      <div className="from-floating relative mt-4">
                        <input
                          type="text"
                          className="w-full h-[50px] px-3 border"
                          id="fname"
                          placeholder=""
                          required
                        />
                        <label
                          className="absolute top-1/2 left-3 -translate-y-1/2 bg-white px-1 text-gray-500 pointer-events-none"
                          htmlFor="fname"
                        >
                          Họ và tên
                        </label>
                      </div>
                      <div className="from-floating relative mt-4">
                        <input
                          type="text"
                          className="w-full h-[50px] px-3 border"
                          id="email"
                          placeholder=""
                          required
                        />
                        <label
                          className="absolute top-1/2 left-3 -translate-y-1/2 bg-white px-1 text-gray-500 pointer-events-none"
                          htmlFor="email"
                        >
                          Email
                        </label>
                      </div>
                      <div className="from-floating relative mt-4">
                        <input
                          type="text"
                          className="w-full h-[50px] px-3 border required:"
                          id="password"
                          placeholder=""
                          required
                        />
                        <label
                          className="absolute top-1/2 left-3 -translate-y-1/2 bg-white px-1 text-gray-500 pointer-events-none"
                          htmlFor="password"
                        >
                          Mật khẩu
                        </label>
                      </div>
                      <div className="forgot-box mt-4 flex items-center justify-between">
                        <div className="rm flex items-center ">
                          <input
                            className="checkbox"
                            type="checkbox"
                            id="CheckDefault"
                          />
                          <label
                            className="form-check-label ml-2"
                            htmlFor="CheckDefault"
                          >
                            Tôi đồng ý với Điều khoản và Quyền riêng tư
                          </label>
                        </div>
                      </div>

                      <div className=" mt-4 log-in flex justify-center items-center w-100 h-[50px] overflow-hidden transition-all duration-300 ease-in-out text-white rounded-lg font-semibold bg-red-600">
                        <button className="btn-sign " type="submit">
                          Đăng ký
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="other-log-in mt-4 relative text-center">
                    <div className="relative">
                      <h6 className="bg-gray-200 uppercase px-14 py-2 inline-block relative z-10">
                        Hoặc
                      </h6>
                      <div className="absolute top-1/2 transform -translate-y-1/2 left-0 w-full h-[0.5px] bg-gray-400"></div>
                    </div>
                  </div>

                  <div className="log-in-button  ">
                    <ul className="flex flex-wrap gap-4 ">
                      <li className="w-full bg-zinc-50 h-[50px] flex justify-center items-center ">
                        <a
                          href="https://www.google.com/"
                          className="flex items-center gap-2"
                        >
                          <img className="w-8" src={BgGoogle} />
                          <span>Đăng nhập bằng Google</span>
                        </a>
                      </li>
                      <li className="w-full bg-zinc-50 h-[50px] flex justify-center items-center ">
                        <a
                          href="https://www.facebook.com/"
                          className="flex items-center gap-2"
                        >
                          <img className="w-8" src={BgFacebook} />
                          <span>Đăng nhập bằng Facebook</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="other-log-in mt-6 relative">
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-0 w-full h-[0.5px] bg-gray-400"></div>
                    <h6></h6>
                  </div>
                  <div className="other-sign-up mt-10 text-center">
                    <h4 className="text-gray-700 leading-6 m-0 font-normal font-light mb-2 text-sm">
                      Đã có tài khoản rồi?
                    </h4>
                    <a href=" " className="text-green-500 text-sm">
                      Đăng nhập
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
