import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const {signInWithGoogle, signInUserEmailPassword, setError, error} = useAuth();

    const [email, setEmail] = useState('');
    const [passWord, setPassWord] = useState('');

    const location = useLocation();
    const history = useHistory();
    const redurectURI = location.state?.from || '/';

    const handleWithGoogleLogin = () => {
        signInWithGoogle()
        ?.then(result => {
        history.push(redurectURI)
    });

    }

    const handleLoginEmailPassword = ()  =>{

        signInUserEmailPassword(email, passWord)

        .then(result =>{
            history.push(redurectURI)
        })
        .catch((error) => {
            setError(error.message);
        })
       

    }


    const changeUserEmail = e =>{
        setEmail(e.target.value);
    }
    const changeUserPassWord = e =>{
        setPassWord(e.target.value);
    }
    

    return (
        <div>
           <div className="login-form mt-5 mx-auto"> 
              
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
                <div className="d-grid gap-2">
                <Button onClick={handleLoginEmailPassword} className="zara-btn"  variant="primary" size="lg">
                Sign In
                </Button>
                </div>
                <p className="text-center text-danger mt-3">{error}</p>
                <Link className="text-center mt-2 text-decoration-none d-block zara-text text-primary" to="/register">Don't have Account? Please Register</Link>
                <div className="gap-2 my-5 text-center">
                <Button variant="warning" onClick={handleWithGoogleLogin} className="btn btn-primary mb-5 ">Login With Google</Button>
                </div>
           </div>
        </div>
    );
};

export default Login;