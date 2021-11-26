import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const {singInwithGoogle, setUser } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGooglelonin = () =>{
        singInwithGoogle()
        .then(result =>{
            history.push(redirect_uri);
            setUser(result.user);
        })
    }
    return (
        <div className="bg-dark">
            <div className='container login-form'>
            <button onClick={handleGooglelonin} className="btn btn-outline-warning fw-bold" type="button">Sing Up with Google</button>
            </div>
        </div>
    );
};

export default Login;