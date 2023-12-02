import Header from "../../pages/user/common/Header";
import Footer from "../user/common/Footer";
import BgSignIn from "../../assets/images/sign-up.png";
import TitleSignUpSeller from "../seller/components/Title/TitleSignUpSeller";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Vui lòng nhập tên của bạn"),
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
  password: yup
    .string()
    .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
    .required("Vui lòng nhập mật khẩu"),
});

export default function RegisterSeller() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      // Thực hiện các thao tác xử lý dữ liệu ở đây
      const response = await axios.post("http://localhost:4000/register", data);
      navigate("/login/seller");
    } catch (error) {
      if (error.response) {
        setError("apiError", {
          type: "manual",
          message: error.response.data.message,
        });
      } else {
        setError("apiError", {
          type: "manual",
          message: "Đã xảy ra lỗi không xác định.",
        });
      }
    }
  };

  return (
    <>
      <Header />
      <TitleSignUpSeller />
      <section className="login-section py-10  flex relative items-center z-0 justify-center ">
        <div className="container-fluid-lg  ">
          <div className="row w-[100%]   mx-[-12px]  ">
            <div className=" relative m-auto flex w-full ">
              <div className="left flex ">
                <div className="flex items-center justify-center h-full px-3 ml-[72px] ">
                  <img src={BgSignIn} alt="Background" />
                </div>
              </div>

              <div className="right  bg-gray-200 px-3  ml-[72px] mr-[72px]">
                <div className="log-in-box  px-10 py-10">
                  <div className="log-in-title mb-2">
                    <h3 className="font-medium leading-tight m-0 text-20">
                      Chào mừng bạn đến với FamersMarket dành cho nhà bán hàng
                    </h3>
                    <h4 className="leading-6 m-0 font-normal text-18 mt-2">
                      Đăng ký tài khoản bán hàng{" "}
                    </h4>
                  </div>
                  <div className="input-box">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="flex flex-col"
                    >
                      <input
                        type="hidden"
                        name="role"
                        value="Seller"
                        {...register("role")}
                      />
                      <div className="from-floating relative mt-4">
                        <input
                          type="text"
                          className="w-full h-[50px] px-3 border"
                          id="fname"
                          placeholder="Nhập tên đầy đủ"
                          {...register("name")}
                        />
                        {errors.name && (
                          <p className="text-red-500 mt-2">
                            {errors.name.message}
                          </p>
                        )}
                        <label
                          className="absolute top-1/2 left-3 -translate-y-1/2 bg-white px-1 text-gray-500 pointer-events-none"
                          htmlFor="fname"
                        >
                          Họ và tên
                        </label>
                      </div>
                      <div className="from-floating relative mt-4">
                        <input
                          type="email"
                          className="w-full h-[50px] px-3 border"
                          id="email"
                          placeholder="Nhập email"
                          {...register("email")}
                        />
                        {errors.email && (
                          <p className="text-red-500 mt-2">
                            {errors.email.message}
                          </p>
                        )}
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
                          id="password"
                          placeholder="Nhập mật khẩu"
                          {...register("password")}
                        />
                        {errors.password && (
                          <p className="text-red-500 mt-2">
                            {errors.password.message}
                          </p>
                        )}
                        <label
                          className="absolute top-1/2 left-3 -translate-y-1/2 bg-white px-1 text-gray-500 pointer-events-none"
                          htmlFor="password"
                        >
                          Mật khẩu
                        </label>
                      </div>
                      <div className="forgot-box mt-4 flex items-center justify-between"></div>
                      <div className=" mt-4 log-in flex justify-center items-center w-100 h-[50px] overflow-hidden transition-all duration-300 ease-in-out text-white rounded-lg font-semibold bg-red-600">
                        <button className="btn-sign " type="submit">
                          Đăng ký
                        </button>
                      </div>
                      {errors.apiError && (
                        <p className="text-red-500 mt-2">
                          {errors.apiError.message}
                        </p>
                      )}{" "}
                    </form>
                  </div>

                  <div className="other-log-in mt-6 relative">
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-0 w-full h-[0.5px] bg-gray-400"></div>
                    <h6></h6>
                  </div>
                  <div className="other-sign-up mt-10 text-center">
                    <h4 className="text-gray-700 leading-6 m-0 font-normal mb-2 text-sm">
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
      <Footer />
    </>
  );
}
