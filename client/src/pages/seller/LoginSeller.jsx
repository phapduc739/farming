import { useState } from "react";
import axios from "axios";
import Bglogin from "../../assets/images/log-in.png";
import BgFacebook from "../../assets/images/facebook.png";
import BgGoogle from "../../assets/images/google.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../user/common/Header";
import Footer from "../user/common/Footer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { login } from "../../redux/actions/userActions";
import useRefreshToken from "../../hooks/useRefreshToken";
import { clearCart } from "../../redux/actions/cartActions";

const schema = yup
  .object({
    email: yup.string().required("Vui lòng nhập Email"),
    password: yup
      .string()
      .min(3, "Password phải từ 3 ký tự trở lên!")
      .required("Vui lòng nhập Password"),
  })
  .required();

export default function LoginSeller() {
  const { accessToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  useRefreshToken();

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:4000/login", {
        email: data.email,
        password: data.password,
      });

      if (response.status === 200) {
        const { user, userId, email, role, accessToken, refreshToken } =
          response.data;

        if (role === "Seller") {
          // Đăng nhập thành công cho người dùng
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);

          dispatch(login(user, userId, email, role, accessToken, refreshToken));

          reset();
          dispatch(clearCart());
          navigate("/seller/profile");
        } else if (role === "User") {
          // Hiển thị thông báo không có quyền đăng nhập
          setError(
            "Bạn không có quyền truy cập. Hãy truy cập vào trang đăng nhập dành riêng cho Khách hàng."
          );
        } else if (role === "Admin") {
          // Hiển thị thông báo không có quyền đăng nhập
          setError(
            "Bạn là người quản lý. Hãy truy cập vào trang đăng nhập dành riêng cho Người quản lý."
          );
        }
      }
    } catch (err) {
      // Xử lý lỗi
      if (err.response.status === 400) {
        setError(err.response.data.error);
      } else {
        setError("Something went wrong!");
      }
    }

    setLoading(false);
  };

  return (
    <>
      <Header />
      <section>
        <div className=" w-[100%] h-[50px] bg-slate-200">
          <div className="w-[1280px] h-full m-auto flex justify-between items-center  text-textDark">
            <div className="z-10 ">
              <h2>Đăng nhập Nhà bán hàng</h2>
            </div>

            <ol className="flex gap-x-[8px] font-medium text-[14px]">
              <li>
                <i className="fa-solid fa-house"></i>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i>
              </li>
              <li>
                <h4>Đăng nhập Nhà bán hàng</h4>
              </li>
            </ol>
          </div>
        </div>
      </section>
      <section className="login-section py-10  flex relative items-center z-0 justify-center ">
        <div className="container-fluid-lg  ">
          <div className="row w-[100%]   mx-[-12px]  ">
            <div className=" relative m-auto flex w-full ">
              <div className="left flex ">
                <div className="flex items-center justify-center h-full px-3 ml-[72px] ">
                  <img src={Bglogin} />
                </div>
              </div>

              <div className="right  bg-gray-200 px-3  ml-[72px] mr-[72px] px-3">
                <div className="log-in-box  px-10 py-10">
                  <div className="log-in-title mb-2">
                    <h3 className="font-medium leading-tight m-0 text-20">
                      Chào mừng bạn đến với FamersMarket dành cho Nhà bán hàng
                    </h3>
                    <h4 className="leading-6 m-0 font-normal text-18 mt-2">
                      Đăng nhập vào tài khoản của bạn
                    </h4>
                  </div>
                  <div className="input-box ">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="flex flex-col"
                    >
                      <div className="from-floating relative mt-4">
                        <input
                          className="w-full h-[50px] px-3 border"
                          placeholder="Nhập email của bạn..."
                          {...register("email")}
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
                          type="password"
                          className="w-full h-[50px] px-3 border required:"
                          placeholder="Nhập mật khẩu của bạn..."
                          {...register("password")}
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
                            Ghi nhớ
                          </label>
                        </div>
                        <div className=" ">
                          <a
                            href="forgot.html"
                            className="forgot-password ml-2"
                          >
                            Quên mật khẩu
                          </a>
                        </div>
                      </div>
                      <div className=" mt-4 log-in flex justify-center items-center w-100 h-[50px] overflow-hidden transition-all duration-300 ease-in-out text-white rounded-lg font-semibold bg-red-600">
                        <button className="btn-login " disabled={loading}>
                          Đăng nhập
                        </button>
                      </div>
                      {error && <p className="text-red-500 mt-2">{error}</p>}{" "}
                    </form>
                  </div>

                  <div className="other-log-in mt-6 relative">
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-0 w-full h-[0.5px] bg-gray-400"></div>
                    <h6></h6>
                  </div>
                  <div className="other-sign-up mt-10 text-center">
                    <h4 className="text-gray-700 leading-6 m-0 font-normal font-light mb-2 text-sm">
                      Bạn chưa có tài khoản?
                    </h4>
                    <Link
                      href="sign-up.html "
                      className="text-green-500 text-sm"
                    >
                      Đăng ký
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
