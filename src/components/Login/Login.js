import React, { useContext, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import GoogleButton from 'react-google-button';
import { handleGoogleSignIn } from './LoginManager';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let {from} = location.state || {from: {pathname: '/'}}
    const googleSignIn = () => {
        handleGoogleSignIn()
        .then(response => {
            console.log(response);
            setLoggedInUser(response);
            history.replace(from);
        });
    }
    return (
        <div>
            <Navbar></Navbar>
            <h1>This is a login page</h1>
            <GoogleButton
            onClick={googleSignIn}
            />
            <Footer></Footer>
        </div>
    );
};

export default Login;