import React, { useContext, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import GoogleButton from 'react-google-button';
import { handleGoogleSignIn, handlePasswordSignIn } from './LoginManager';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';



const Login = () => {
    const [error, setError] = useState("");
    const {register, handleSubmit, formState: {errors}} = useForm();
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
    const submitForm = (data) => {
        handlePasswordSignIn(data.email, data.password)
        .then(response => {
           if(response.email){
            console.log(response);
            setLoggedInUser(response);
            history.replace(from);
           } else {
                console.log(response);
                setError(response);
           }
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-center">This is a login page</h1>
            <p className="text-center" style={{color: 'red'}}>{error.length > 0 && <span>{error}</span>}</p>
            <div style={{width: '500px', marginLeft: '446px', marginBottom: '20px'}}>
                <form onSubmit={handleSubmit(submitForm)}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" {...register("email")} placeholder="Enter email" required/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" {...register("password")} placeholder="Password" required/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            <div style ={{marginLeft: '556px'}}>
            <GoogleButton
            onClick={googleSignIn}
            />
            <p>Don't have an account? <Link to="/register">Create an account</Link></p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;