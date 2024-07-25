import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Register = () => {
  const {
    register,
    getValues,
    handleSubmit,
    setValue,
    setError,
    reset,
    formState,
  } = useForm();

  const registerSubmit = async (value) => {
    console.log("value submit === ", value);

    try {
      console.log("start call api");
      const res = await axios.post("http://10.82.60.85:3001/user/register", {
        username: value?.username,
        email: value?.email,
        password: value?.password,
        full_name: value?.name,
      });

      console.log("response === ", res);
      console.log("end call api");
    } catch (err) {
      console.log("error === ", err);
    }

    // {username: 'admin123', password: '123456', confirm: '123456', email: 'admin123@gmail.com', name: 'admin test'}

    // axios
    //   .post("http://10.82.60.26:3001/user/register", {
    //     username: value?.username,
    //     email: value?.email,
    //     password: value?.password,
    //     full_name: value?.name,
    //   })
    //   .then((res) => {
    //     //api success
    //     console.log("response === ", res?.data);
    //   })
    //   .catch((err) => {
    //     //api error
    //     console.log("error === ", err?.response?.data);
    //   });

    // console.log("submit data");
  };

  return (
    <div className="container p-5">
      <div className="col-4 offset-4">
        <h1 className="text-primary">{`Đăng ký`}</h1>
        <div className="mb-3">
          <label className="form-label">Tài khoản</label>
          <input
            type="text"
            className="form-control"
            {...register("username", {
              required: {
                value: true,
                message: "Tài khoản không được bỏ trống",
              },
              minLength: {
                value: 3,
                message: "Tài khoản ít nhất có 3 ký tự",
              },
            })}
          />
          {formState?.errors?.username && (
            <small className="text-danger">
              {formState?.errors?.username?.message}
            </small>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Mật khẩu</label>
          <input
            type="password"
            className="form-control"
            {...register("password", {
              required: {
                value: true,
                message: "Mật khẩu không được bỏ trống",
              },
              minLength: {
                value: 6,
                message: "Mật khẩu ít nhất có 6 ký tự",
              },
            })}
          />
          {formState?.errors?.password && (
            <small className="text-danger">
              {formState?.errors?.password?.message}
            </small>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Xác nhận mật khẩu</label>
          <input
            type="password"
            className="form-control"
            {...register("confirm", {
              required: {
                value: true,
                message: "Xác nhận mật khẩu không được bỏ trống",
              },
              minLength: {
                value: 6,
                message: "Xác nhận mật khẩu ít nhất có 6 ký tự",
              },
              validate: (confirm) => {
                const password = getValues()?.password;
                if (confirm === password) {
                  return true;
                }

                return "Mật khẩu và xác nhận không trùng nhau";
              },
            })}
          />
          {formState?.errors?.confirm && (
            <small className="text-danger">
              {formState?.errors?.confirm?.message}
            </small>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            {...register("email", {
              required: {
                value: true,
                message: "Email không được bỏ trống",
              },
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Email không đúng định dạng",
              },
            })}
          />
          {formState?.errors?.email && (
            <small className="text-danger">
              {formState?.errors?.email?.message}
            </small>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Tên</label>
          <input
            type="text"
            className="form-control"
            {...register("name", {
              required: {
                value: true,
                message: "Tên không được bỏ trống",
              },
            })}
          />
          {formState?.errors?.name && (
            <small className="text-danger">
              {formState?.errors?.name?.message}
            </small>
          )}
        </div>
        {/* <div className="mb-3">
          <label className="form-label">Giới tính</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value={"0"}
              {...register("gender", {
                required: {
                  value: true,
                  message: "Giới tính không được bỏ trống",
                },
              })}
            />
            <label className="form-check-label" htmlFor="">
              Nam
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value={"1"}
              {...register("gender", {
                required: {
                  value: true,
                  message: "Giới tính không được bỏ trống",
                },
              })}
            />
            <label className="form-check-label" htmlFor="">
              Nữ
            </label>
          </div>
          {formState?.errors?.gender && (
            <small className="text-danger">
              {formState?.errors?.gender?.message}
            </small>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Ngành học
          </label>
          <select
            className="form-select form-select-lg"
            {...register("major", {
              validate: (major) => {
                if (major === "-1") {
                  return "Ngành học bắt buộc chọn";
                }

                return true;
              },
            })}
          >
            <option selected value="-1">
              ------Chọn ngành học------
            </option>
            <option value="0">{`Lập trình web (BE)`}</option>
            <option value="1">{`Lập trình web (FE)`}</option>
            <option value="2">{`Phát triển phần mềm (Java)`}</option>
            <option value="3">{`Phát triển phần mềm (C#)`}</option>
          </select>
          {formState?.errors?.major && (
            <small className="text-danger">
              {formState?.errors?.major?.message}
            </small>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Sở thích</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value={"0"}
              {...register("hobbies", {
                required: {
                  value: true,
                  message: "Sở thích bắt buộc chọn",
                },
              })}
            />
            <label className="form-check-label" htmlFor="">
              Du lịch
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value={"1"}
              {...register("hobbies", {
                required: {
                  value: true,
                  message: "Sở thích bắt buộc chọn",
                },
              })}
            />
            <label className="form-check-label" htmlFor="">
              Xem phim
            </label>
          </div>

          {formState?.errors?.hobbies && (
            <small className="text-danger">
              {formState?.errors?.hobbies?.message}
            </small>
          )}
        </div> */}
        <button
          type="button"
          className="btn btn-primary w-100 mb-3"
          onClick={handleSubmit(registerSubmit)}
        >
          Đăng ký
        </button>
        <a className="w-auto">{`Đăng nhập`}</a>
      </div>
    </div>
  );
};

export default Register;
