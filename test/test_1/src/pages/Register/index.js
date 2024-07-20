import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Register = () => {
    const { register, setValue, setError, formState, reset, handleSubmit, getValues } = useForm();



    const registerSubmit = async (value) => {
        console.log('value === ', value);

        try{
            const res = await axios.post('http://10.82.60.26:3001/user/register',{
                username: value?.username,
                email: value?.email,
                password: value?.password,
                full_name: value?.fullname,
            });
            
            console.log("res === ", res);
            console.log("end call api");
        }catch(err){
            console.log('err === ', err);

        }
        // axios.post('http://10.82.60.26:3001/user/register',
        //     {
        //         username: value?.username,
        //         email: value?.email,
        //         password: value?.password,
        //         full_name: value?.fullname,
        //     }
        // ).then(res => {
        //     console.log('res === ', res);
        // }).catch(err => {
        //     console.log('err === ', err);
        // });
        // console.log("submit data");
    };

    return (
        <div className='container'>
            <h1>Register</h1>
            <a className='btn btn-primary' href='/login'>Đăng nhập</a>
            <a className='btn btn-primary' href='/register'>Đăng kí</a>

            <div className='col-4 offset-4'>
                <h1 className='text-primary'>Register</h1>
                <div className='mb-3'>
                    <label className='form-label'>Username</label>
                    <input name='username' type='text' className='form-control'
                        {...register("username", {
                            required: {
                                value: true,
                                message: "Tên tài khoản không được bỏ trống"

                            },
                            minLength: {
                                value: 5,
                                message: "Tên tài khoản phải lớn hơn 5 ký tự",
                            }
                        })}
                    />
                    {formState?.errors?.username &&
                        <small className='text-danger'>
                            {formState?.errors?.username?.message}
                        </small>
                    }
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input name='password' type='password' className='form-control'
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Mật khẩu không được bỏ trống"

                            },
                            minLength: {
                                value: 8,
                                message: "Mật khẩu phải lớn hơn 8 ký tự",
                            },
                            pattern: {
                                value: /^[A-Za-z0-9]+$/i,
                                message: "Mật khẩu phải chứa ký tự chữ"
                            },
                        })}
                    />
                    {formState?.errors?.password &&
                        <small className='text-danger'>
                            {formState?.errors?.password?.message}
                        </small>
                    }
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Confirm Password</label>
                    <input name='confirmPassword' type='password' className='form-control'
                        {...register("confirmPassword", {
                            required: {
                                value: true,
                                message: "Mật khẩu không được bỏ trống"

                            },
                            minLength: {
                                value: 8,
                                message: "Mật khẩu phải lớn hơn 8 ký tự",
                            },
                            pattern: {
                                value: /^[A-Za-z0-9]+$/i,
                                message: "Mật khẩu phải chứa ký tự chữ"
                            },
                            validate: (confirm) => {
                                const password = getValues()?.password;
                                if (confirm === password) {
                                    return true;
                                }
                                return "Mật khẩu không trùng khớp";
                            },
                        })}
                    />
                    {formState?.errors?.confirmPassword &&
                        <small className='text-danger'>
                            {formState?.errors?.confirmPassword?.message}
                        </small>
                    }
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Full Name</label>
                    <input name='fullname' type='text' className='form-control'
                        {...register("fullname", {
                            required: {
                                value: true,
                                message: "Họ và tên không được để trống"
                            }
                        })}

                    />
                    {formState?.errors?.fullname &&
                        <small className='text-danger'>
                            {formState?.errors?.fullname?.message}
                        </small>
                    }
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input name='email' type='email' className='form-control'
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Email không được để trống"
                            },
                            pattern: {
                                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                message: "Email không đúng định dạng"
                            }
                        })}
                    />
                    {formState?.errors?.email &&
                        <small className='text-danger'>
                            {formState?.errors?.email?.message}
                        </small>
                    }
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Gender</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="sex" id="male" checked value={"male"}
                            {...register("gender")}
                        />
                        <label class="form-check-label" for="male">
                            male
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="sex" id="female" value={"female"}
                            {...register("gender")}
                        />
                        <label class="form-check-label" for="female">
                            female
                        </label>
                    </div>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Subject</label>
                    <select className="form-select" aria-label="Default select example">
                        <option value={"web"}  {...register("subject")}>Web design</option>
                        <option value={"graphic"} {...register("subject")}>Graphic design</option>
                        <option value={"auto"} {...register("subject")}>Automation</option>
                    </select>
                </div>
                <button className='btn btn-success w-100 mb-3' onClick={handleSubmit(registerSubmit)}>
                    Register
                </button>
                <a className='btn btn-primary w-auto me-3' href='/register'>Register</a>
            </div>
        </div>
    );
}

export default Register;