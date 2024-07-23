import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register, setValue, setError, formState, reset, handleSubmit, getValues } = useForm();

    const registerSubmit = (value) => {
        console.log('value === ', value);
    }

    return (
        <div className='container'>
            <div className='col-4 offset-4 p-3'>
                <h2 className='text-primary'>Register</h2>
                <div className='mb-3'>
                    <label className='form-label'>Username</label>
                    <input name='username' type='text' className='form-control'
                        {...register("username", {
                            required: {
                                value: true,
                                message: "Username cannot be left blank"

                            },
                            minLength: {
                                value: 5,
                                message: "Username name must be greater than 5 characters",
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
                                message: "Email cannot be left blank"
                            },
                            pattern: {
                                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                message: "Email format is wrong"
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
                                message: "Password cannot be left blank"

                            },
                            minLength: {
                                value: 8,
                                message: "Passowrd must be 8 characters long",
                            },
                            pattern: {
                                value: /^[A-Za-z0-9]+$/i,
                                message: "Password must contain alphanumeric characters"
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
                                message: "Age cannot be left blank"
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
                                message: "bio cannot be left blank"
                            }
                        })}

                    />
                    {formState?.errors?.bio &&
                        <small className='text-danger'>
                            {formState?.errors?.bio?.message}
                        </small>
                    }
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Birthdate</label>
                    <input name='birthdate' type='date' className='form-control text'
                        {...register("birthdate", {
                            required: {
                                value: true,
                                message: "birthdate cannot be left blank"
                            }
                        })}

                    />
                    {formState?.errors?.birthdate &&
                        <small className='text-danger'>
                            {formState?.errors?.birthdate?.message}
                        </small>
                    }
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Appointment</label>
                    <input name='appointment' type='datetime-local' className='form-control text'
                        {...register("appointment", {
                            required: {
                                value: true,
                                message: "appointment cannot be left blank"
                            }
                        })}

                    />
                    {formState?.errors?.appointment &&
                        <small className='text-danger'>
                            {formState?.errors?.appointment?.message}
                        </small>
                    }
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Hobbies</label>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" name='hobbies' id="flexCheckDefault"   
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                            Reading
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Traveling
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            Gaming
                        </label>
                    </div>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Address</label>
                    <input name='address' type='text' className='form-control text'
                        {...register("address", {
                            required: {
                                value: true,
                                message: "address cannot be left blank"
                            }
                        })}

                    />
                    {formState?.errors?.address &&
                        <small className='text-danger'>
                            {formState?.errors?.address?.message}
                        </small>
                    }
                </div>
                <div>
                    <div className='mb-3 col-6'>
                        <label className='form-label'>City</label>
                        <input name='address' type='text' className='form-control text'
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: "address cannot be left blank"
                                }
                            })}

                        />
                        {formState?.errors?.address &&
                            <small className='text-danger'>
                                {formState?.errors?.address?.message}
                            </small>
                        }
                    </div>
                    <div className='mb-3 col-6'>
                        <label className='form-label'>ZIP Code</label>
                        <input name='zipcode' type='text' className='form-control text'
                            {...register("zipcode", {
                                required: {
                                    value: true,
                                    message: "zipcode cannot be left blank"
                                }
                            })}

                        />
                        {formState?.errors?.zipcode &&
                            <small className='text-danger'>
                                {formState?.errors?.zipcode?.message}
                            </small>
                        }
                    </div>
                </div>
                <button className='btn btn-success w-100 mb-3' onClick={handleSubmit(registerSubmit)}>
                    Register
                </button>
                
            </div>
        </div>
    )
}
export default Register;