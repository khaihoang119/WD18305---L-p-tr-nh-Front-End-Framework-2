import React, { useEffect } from 'react';
import { useState } from 'react';


const Login = () => {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const usernameChange = (props) => {
    //     console.log("on username change === ", props.target.value);
    //     setUsername(props.target.value);
    // }
    // const passwordChange = (props) => {
    //     console.log("on password change === ", props.target.value);
    //     setPassword(props.target.value);
    // }

    // const onTextChange = (props) => {
    //     console.log("name === ", props.target.name);
    //     console.log("value === ", props.target.value);
    //     if(props.target.name === 'username') {
    //         setUsername(props.target.value);
    //         return;
    //     }
    //     if(props.target.name === 'password') {
    //         setPassword(props.target.value);
    //         return;
    //     }   
    // }

    const [errors, setErrors] = useState({

    });
    const [value, setValue] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    });

    const onTextChange = (props) => {
        console.log("name === ", props.target.name);
        console.log("value === ", props.target.value);
        setValue({
            ...value,
            [props.target.name]: props.target.value
        })
    }

    const login = () => {
        let errorsTemp = {};
        Object.keys(value).map((item, index) => {
            if (value[item]?.trim() === '') {
                errorsTemp = {
                    ...errorsTemp,
                    [item]: `${item} không được để trống`
                };
            }
        });
        setErrors(errorsTemp);

    }

    useEffect(() => {
        console.log("value === ", value);
    }, [value])



    return (
        <div className='container'>
            <div className='container'>
                <h1>Login</h1>
                <a className='btn btn-primary' href='/login'>Đăng nhập</a>
                <a className='btn btn-primary' href='/register'>Đăng kí</a>
            </div>
            <div className='col-4 offset-4'>
                <h1 className='text-primary'>Login</h1>
                <div className='mb-3'>
                    <label className='form-label'>Username</label>
                    <input name='username' type='text' value={value.username} className='form-control' onChange={onTextChange} />
                    {errors.username && <small className='text-danger'>{errors.username}</small>}
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input name='password' type='password' value={value.password} className='form-control' onChange={onTextChange} />
                    {errors.password && <small className='text-danger'>{errors.password}</small>}
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Confirm Password</label>
                    <input name='confirmPassword' type='password' value={value.confirmPassword} className='form-control' onChange={onTextChange} />
                    {errors.confirmPassword && <small className='text-danger'>{errors.confirmPassword}</small>}
                </div>
                <button className='btn btn-success w-100 mb-3' onClick={login} >{`Login`}</button>
                <a className='btn btn-primary w-auto me-3' href='/register'>Register</a>
            </div>
        </div>
    )
}


// function Login() {
//     return (
//         <div className='container'>
//            <h1>Login</h1>
//            <a className='btn btn-primary' href='/login'>Đăng nhập</a>
//            <a className='btn btn-primary' href='/register'>Đăng kí</a>
//         </div>
//     );
// }

export default Login;