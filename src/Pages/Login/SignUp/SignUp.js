import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Signup.css'


const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()
   

    const registerform = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const pass = e.target.pass.value
        console.log(email,pass)
        createUserWithEmailAndPassword(email, pass)
    }
    if(user){
        navigate('/home')
    }

    return (
        <div className='register-form'>
            <h1>SignUp Please !!!</h1>
            <form onSubmit={registerform}>
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