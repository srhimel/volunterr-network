import React from 'react';
import { FcGoogle } from "react-icons/fc";
import './Register.css'

const Register = () => {
    return (
        <div>
            <div className="container">
                <div className="login-box card">
                    <h2>Login With</h2>
                    <button><FcGoogle /> <span>Continue with Google</span></button>
                    <p className="reg">Don't have an account? <a href="/">Create an account</a> </p>
                </div>
            </div>
        </div>
    );
};

export default Register;