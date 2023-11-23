import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { login } from "../../../redux/actions/userActions";
import useRefreshToken from "../../../hooks/useRefreshToken";

const schema = yup
  .object({
    email: yup.string().required("Vui lòng nhập Email"),
    password: yup
      .string()
      .min(3, "Password phải từ 3 ký tự trở lên!")
      .required("Vui lòng nhập Password"),
  })
  .required();

export default function Login() {
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
        const { user, userId, email, accessToken, refreshToken } =
          response.data;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        dispatch(login(user, userId, email, accessToken, refreshToken));

        reset();

        navigate("/user/info");
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input className="border-2 border-indigo-500" {...register("email")} />
      <br />
      <input
        className="border-2 border-indigo-500"
        {...register("password")}
        type="password"
      />
      <br />
      <button className="border-2 border-indigo-500" disabled={loading}>
        Login
      </button>

      {error && <p>{error}</p>}
    </form>
  );
}
