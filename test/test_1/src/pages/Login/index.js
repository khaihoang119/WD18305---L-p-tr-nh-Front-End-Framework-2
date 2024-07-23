import React, { useEffect, useState } from 'react';
import Register from '../Register';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { loginApi } from '../../services/Auth';
const Login = (value) => {
    const {
        register,
        getValues,
        handleSubmit,
        setValue,
        setError,
        reset,
        formState,
    } = useForm();
    const naviagate = useNavigate();
    const [cookie, setCookie, removeCookie] = useCookies(["token"]);
    const loging = async (value) => {
        try {
            const res = await axios.post("http://172.16.21.214:3001/auth/login", {
                username: value?.username,
                password: value?.password,
                device: "website",
            });
            console.log("res ===", res.data);

            if (res?.data?.access_token) {
                const dateExpired = new Date();
                dateExpired.setHours(dateExpired.getHours() + 1);

                cookie.set("token", res?.data?.access_token, { expires: dateExpired });
                naviagate("/profile");
            }
        } catch (err) {
            console.log("error ===", err);
        }
    };
    // const [value, setValue] = useState({
    //     username: '',
    //     password: ''
    // });

    // const [errors, setErrors] = useState({});

    // const onTextChange = (e) => {
    //     console.log('name===', e.target.name);
    //     console.log('value===', e.target.value);
    //     setValue({
    //         ...value,
    //         [e.target.name]: e.target.value
    //     });
    // };

    // const handleLogin = () => {
    //     let errorsTemp = {};
    //     Object.keys(value).forEach((item) => {
    //         if (value[item]?.trim() === '') {
    //             errorsTemp = {
    //                 ...errorsTemp,
    //                 [item]: 'Please enter complete info'
    //             };
    //         }
    //     });
    //     setErrors(errorsTemp);
    // };

    // useEffect(() => {
    //     console.log('value change ===', value);
    // }, [value]);

    // const login = async (value) => {
    //     try {
    //         const res = await axios.post("http://10.82.60.26:3001/auth/login", {
    //             // ...value,
    //             username: value?.username,
    //             password: value?.password,
    //             device: "mobile",
    //         })
    //         console.log("res ===", res.data);
    //     } catch (err) {
    //         console.log("err === ", err);
    //     }
    // }


    return (
        <div className='container'>
            <div className='col-4 offset-4'>
                <h1 className='text-primary mb-5'>{`Login`}</h1>
                <div className='mb-3'>
                    <label className='form-label'>Username</label>
                    <input
                        name='username'
                        type='text' className='form-control'
                        {...Register("username")}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input
                        name='password'
                        type='password'
                        className='form-control'
                        {...Register("password")}
                    />
                </div>
                <button className='btn btn-success w-100 mb-3' onClick={loging}>
                    Login
                </button>
                <a className='btn btn-primary w-auto me-3' href='/register'>Register</a>
            </div>
        </div>
    );
};

export default Login;