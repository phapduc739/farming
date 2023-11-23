import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { login } from "../../redux/actions/userActions";
import useRefreshToken from "../../hooks/useRefreshToken";
import LogoF from "../../assets/images/Logo.png";

const schema = yup
  .object({
    email: yup.string().required("Vui lòng nhập Email"),
    password: yup
      .string()
      .min(3, "Password phải từ 3 ký tự trở lên!")
      .required("Vui lòng nhập Password"),
  })
  .required();

export default function LoginAdmin() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
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

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        dispatch(login(user, userId, email, role, accessToken, refreshToken));

        reset();

        navigate("/admin/dashboard");
      }
    } catch (err) {
      if (err.response.status === 400) {
        setError("Invalid email or password");
      } else {
        setError("Something went wrong!");
      }
    }
    setLoading(false);
  };

  return (
    <>
      <div className="bg-gray-100 w-full h-[100vh] flex justify-center items-center">
        <div className="flex flex-col gap-8">
          <div className="logo flex justify-center items-center gap-2">
            <img className="w-[28px] h-[28px]" src={LogoF} alt="" />
            <h1 className="text-[20px] font-medium">Farmers Market</h1>
          </div>
          <form
            className="bg-white w-[480px] h-auto pb-[30px] flex flex-col rounded-[8px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="title px-[16px] py-[20px] text-center border-b">
              <h2 className="text-[18px] font-semibold text-[#0A0A0A]">
                Đăng nhập Admin
              </h2>
            </div>
            <div className="px-[40px] py-[32px] flex flex-col gap-9">
              <label
                htmlFor="email"
                className="flex flex-col gap-2 text-[14px] font-bold"
              >
                Địa chỉ Email:
                <input
                  className="font-normal rounded-[4px] border-2 border-darkGray outline-primaryGreen hover:outline-primaryGreen px-[20px] py-[12px]"
                  {...register("email")}
                  placeholder="Nhập địa chỉ email..."
                />
              </label>
              <label
                htmlFor="password"
                className="flex flex-col gap-2 text-[14px] font-bold relative"
              >
                Mật khẩu:
                <input
                  className="font-normal rounded-[4px] border-2 border-darkGray outline-primaryGreen hover:outline-primaryGreen px-[20px] py-[12px]"
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  placeholder="Nhập mật khẩu..."
                />
                <div
                  className="absolute right-[14px] top-[47px] cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <i className="fa-regular fa-eye-slash"></i>
                  ) : (
                    <i className="fa-regular fa-eye"></i>
                  )}
                </div>
              </label>
              <button
                className="bg-primaryGreen hover:bg-[#069175] transition text-white rounded-[4px] px-[20px] py-[12px]"
                disabled={loading}
              >
                Đăng nhập
              </button>

              {error && <p>{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
