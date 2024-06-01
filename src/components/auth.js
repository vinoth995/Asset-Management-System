import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { FaUserCircle, FaLock } from "react-icons/fa";
import "./Auth.css";

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        try {
        await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);

    }
    };

    const signInWithGoogle = async () => {
        try {
        await signInWithPopup(auth, googleProvider);
    } catch (err) {
        console.error(err);

    }
    };

    return (
        <div className='main'>
        <div className='wrapper'>
            <form>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type='text' placeholder='Email..'onChange={(e) => setEmail(e.target.value)} required />
                    <FaUserCircle className='icon' />
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Password..' onChange={(e) => setPassword(e.target.value)} required />
                    <FaLock className='icon'/>
                </div>
                <div className='remember-forget'>
                    <label><input type="checkbox" />Remember me</label>
                        <a href="..">Forget password</a>
                </div>
                
                <button onClick={signIn}> Sign In </button>
                <br>
                </br>
                <button onClick={signInWithGoogle}> Google Sign In </button>
            
                <div className='register-link'>
                    <p>Dont have a account? <a href='register'>Register</a></p>
                </div>
            </form>

        </div>
        </div>);
};

export default auth;