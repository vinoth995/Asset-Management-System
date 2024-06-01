import React, { useContext } from 'react';
import './LoginForm.css';
import { FaUserCircle, FaLock } from "react-icons/fa";
import { TableContext } from '../App';

const LoginForm = () => {
    const {userDetails, setUserDetails } =
    useContext(TableContext);
    const login = () =>{
        localStorage.setItem('userInfo', "login")
    }
    return (
        <div className='main'>
        <div className='wrapper'>
            <form>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type='text' placeholder='Username' required />
                    <FaUserCircle className='icon' />
                </div>
                <div className='input-box'>
                    <input type='text' placeholder='Password' required />
                    <FaLock className='icon'/>
                </div>
                <div className='remember-forget'>
                    <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forget password</a>
                </div>
                <button onClick={() => login()}>Login</button>
                <div className='register-link'>
                    <p>Dont have a account? <a href='register'>Register</a></p>
                </div>
            </form>

        </div>
        </div>);
};

export default LoginForm;
