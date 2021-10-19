import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const {createUserEmailPassword, error} = useAuth();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [passWord, setPassWord] = useState('');
    const [passWord2, setPassWord2] = useState('');

    const changeUserName = e =>{
        setName(e.target.value);
    }
    const changeUserEmail = e =>{
        setEmail(e.target.value);
    }
    const changeUserPassWord = e =>{
        setPassWord(e.target.value);
    }
    const changeUserPassWord2 = e =>{
        setPassWord2(e.target.value);
    }
    const handleRegistrationUser = () =>{
        if(passWord === passWord2){
            createUserEmailPassword(email, passWord, name);
           
        }
       
    }

    
    return (
        <div>
           <div className="login-form my-5 mx-auto"> 
              
                <InputGroup className="mb-3">
                <FormControl 
                    onBlur={changeUserName}
                    placeholder="Name"
                    aria-label="name"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                <FormControl
                    onBlur={changeUserEmail}
                    placeholder="Email"
                    aria-label="email"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                <FormControl 
                    type="password"
                    onBlur={changeUserPassWord}
                    placeholder="Password"
                    aria-label="password"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                <FormControl
                    type="password"
                    onBlur={changeUserPassWord2}
                    placeholder="Confirm Password"
                    aria-label="confirm-password"
                    />
                </InputGroup>
                <div className="d-grid gap-2">
                <Button className="zara-btn"  onClick={handleRegistrationUser} variant="primary" size="lg">
                    Registration
                </Button>
                </div>
                <p className="text-center text-danger mt-3">{error}</p>
                <Link className="text-center mt-2 text-decoration-none d-block zara-text text-primary" to="/login">Already have an account</Link>
           </div>
        </div>
    );
};

export default Register;