import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { login } from "../actions/userActions";

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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [token, setToken] = useState(null);
  const [expiresAt, setExpiresAt] = useState();

  useEffect(() => {
    const refreshToken = async () => {
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axios.get("/refresh-token", {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        });

        const newToken = response.data;
        setToken(newToken.token);
        const decoded = decodeToken(newToken.token);
        setExpiresAt(decoded.exp);
      } catch (error) {
        console.log(error);
      }
    };

    if (!token) return;

    const interval = setInterval(() => {
      const currentTime = Date.now() / 1000;

      if (expiresAt - currentTime < 5 * 60) {
        refreshToken();
      }
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, [token, expiresAt]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:4000/login", {
        email: data.email,
        password: data.password,
      });

      const user = response.data;

      dispatch(login(user));
      localStorage.setItem("token", user.token);

      navigate("/user/info");
    } catch (error) {
      setError("Đăng nhập thất bại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} />
      <p>{errors.email?.message}</p>

      <input {...register("password")} type="password" />
      <p>{errors.password?.message}</p>

      <p
        style={{
          color: "red",
        }}
      >
        {error}
      </p>

      <button disabled={loading}>Login</button>
    </form>
  );
}
