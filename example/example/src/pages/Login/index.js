import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
//New
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../services/Auth";
import { useDispatch, useSelector } from "react-redux";
import { Auth } from "../../redux/actions";

const Login = () => {
  const {
    register,
    getValues,
    handleSubmit,
    setValue,
    setError,
    reset,
    formState,
  } = useForm();
  //New
  const naviagate = useNavigate();
  const [cookie, setCookie, removeCookie] = useCookies(["token"]);
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.auth.profile);

  useEffect(() => {
    console.log("user info ===", profile);
    if(profile){
      naviagate("/profile");
    }
  }, [profile]);

  const login = async (value) => {
    try {
      // const res = await axios.post("http://172.16.21.214:3001/auth/login", {
      //   // ...value,
      //   username: value?.username,
      //   password: value?.password,
      //   device: "website",
      // });
      // console.log("res === ", res.data);

      const res = await loginApi({
        username: value?.username,
        password: value?.password,
      });

      if (res?.access_token) {
        const dateExpired = new Date();
        dateExpired.setHours(dateExpired.getHours() + 1);

        //New
        setCookie("token", res?.access_token, { expires: dateExpired });
        dispatch(Auth.getProfile());
        // naviagate("/profile");
      }
    } catch (err) {
      console.log("error === ", err);
    }
  };

  return (
    <div className="container">
      <div className="col-4 offset-4">
        <h1 className="text-danger mb-5">{`Login`}</h1>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            name="username"
            type="text"
            className="form-control"
            {...register("username")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            {...register("password")}
          />
        </div>

        {/* <div className="form-check mb-3">
          <input
            name="remember"
            className="form-check-input"
            type="checkbox"
            id="remember"
            // checked={remember}
            // onChange={onInputChange}
          />
          <label
            className="form-check-label"
            htmlFor="remember"
          >{` Remember me`}</label>
        </div> */}

        <button
          className="btn btn-primary w-100 mb-3"
          onClick={handleSubmit(login)}
        >{`Login`}</button>

        <a href="/register">{`Register`}</a>
      </div>
    </div>
  );
};

export default Login;
