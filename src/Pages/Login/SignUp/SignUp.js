import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'

const SignUp = () => {
    return (
        <div className='register-form'>
            <h1>SignUp Please !!!</h1>
            <form action="">
                <input type='text' name='name' placeholder='Your Name' required></input>
                <br />
                <input type='email' name='email' placeholder='Your Email' required></input>
                <br />
                <input type='password' name='pass' placeholder='Your Password' required></input>
                <input type="submit" value='SignUp' />
            </form>
            <p>Already have an account ? <Link to='/login' className='text-info pe-auto text-decoration-none'>Please Login</Link></p>
        </div>
    );
};

export default SignUp;