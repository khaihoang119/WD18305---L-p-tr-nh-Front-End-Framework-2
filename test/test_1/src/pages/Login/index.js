
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {Cookies} from 'react-cookie';

const Login = () => {
    const {register, setValue, setError, formState, reset, handleSubmit, getValues} = useForm();
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


    const loginSubmit = async (value) => {
       console.log('value === ', value);
    try{
        const res = await axios.post('http://10.82.60.26:3001/auth/login',{
            ...value,
            device:"mobile",
        });
        console.log("res === ", res.data);
        let cookies = new Cookies();
        const dateExpire = new Date();
        dateExpire.setDate(dateExpire.getDate() + 1);
        cookies.set('token', res?.data?.access_token, {expires:dateExpire});
        cookies.update();
        console.log("end call api");
    }catch(err){
        console.log('err === ', err);
    }
    }

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
                    <input name='username' type='text' className='form-control'
                    {...register("username")}
                    />
                   
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input name='password' type='password' className='form-control' 
                    {...register("password")}
                    />
                    
                </div>
                
                <button className='btn btn-success w-100 mb-3' onClick={handleSubmit(loginSubmit)} >Đăng nhập</button>
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