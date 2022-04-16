import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const emailRef = useRef('')
    const passRef = useRef('')
    const handleSubmit = e=>{
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passRef.current.value;
    }
    const navigate = useNavigate()
    const handleNavigate = ()=>{
        navigate('/signup')

    }
    return (
        <div className='container w-50 mx-auto mt-2'>
            <h1 className='text-center text-info'>Please Login !!</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New to GeniusCar <Link to='/signup' className='text-info pe-auto text-decoration-none' onClick={handleNavigate}>Please Register</Link></p>
        </div>
    );
};

export default SignIn;