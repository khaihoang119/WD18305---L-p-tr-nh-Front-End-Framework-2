import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () =>{
    const {register, setValue, setError, formState, reset, handleSubmit, getValues} = useForm();

    const registerSubmit = (value) =>{
        console.log('value === ', value);
    }

    return(
        <div className='container'>
            <div className='col-4 offset-4 p-3'>
                <h2 className='text-primary'>Register</h2>
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
                    <label className='form-label'> Age</label>
                    <input name='age' type='number' className='form-control'
                        {...register("age", {
                            required: {
                                value: true,
                                message: "Tuổi không được bỏ trống"
                            },
                        })}
                    />
                    {formState?.errors?.age &&
                        <small className='text-danger'>
                            {formState?.errors?.age?.message}
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
                    <label className='form-label'>Country</label>
                    <select className="form-select" aria-label="Default select example">
                        <option value={"vietnam"}  {...register("subject")}>VietNam </option>
                        <option value={"unitedstates"} {...register("subject")}>United States</option>
                        <option value={"england"} {...register("subject")}>England</option>
                    </select>
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Bio</label>
                    <textarea name='bio' type='text' className='form-control text'
                        {...register("bio", {
                            required: {
                                value: true,
                                message: "bio không được để trống"
                            }
                        })}

                    />
                    {formState?.errors?.bio &&
                        <small className='text-danger'>
                            {formState?.errors?.bio?.message}
                        </small>
                    }
                </div>
                
                
               
                <button className='btn btn-success w-100 mb-3' onClick={handleSubmit(registerSubmit)}>
                    Register
                </button>
                <a className='btn btn-primary w-auto me-3' href='/register'>Register</a>
            </div>
        </div>
    )
}
export default Register;