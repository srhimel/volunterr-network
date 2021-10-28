import React from 'react';
import './RegisterVol.css'

const RegisterVol = () => {
    return (
        <div>
            <div className="container">
                <div className="card vol-reg">
                    <h2>Register as a Volunteer</h2>
                    <form >
                        <input type="text" placeholder="Full Name" />
                        <input type="text" placeholder="Username or Email" />
                        <input type="date" placeholder="Date" />
                        <label htmlFor="">Description</label>
                        <textarea type="text" ></textarea>
                        <button type="submit" >Registration</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterVol;