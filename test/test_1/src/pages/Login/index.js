import React from 'react';

function Login() {
    return (
        <div className='container'>
           <h1>Login</h1>
           <a className='btn btn-primary' href='/login'>Đăng nhập</a>
           <a className='btn btn-primary' href='/register'>Đăng kí</a>
        </div>
    );
}

export default Login;