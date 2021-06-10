import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import schema from './schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { handlePasswordSignUp } from '../LoginManager';
import { useHistory } from 'react-router';

const SignUp = () => {
    const [error, setError] = useState("");
    const history = useHistory();
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    });
    const submitForm = (data) => {
        const name = `${data.firstName} ${data.lastName}`;
        handlePasswordSignUp(name, data.email, data.password)
        .then(response => {
            if(response.email){
                //console.log(response.email);

                //adding the user in the database
                const user = {name, email: data.email};
                fetch("http://localhost:5000/addUser", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(response => response.json())
                .then(result => console.log(result))
                
                alert("Your account has been created! Login now to explore")
                history.push("/login");
            } else {
                console.log(response);
                setError(response);
                history.push("/register");
            }
        })
    }
    return (
        <div className="text-center">
            <Navbar></Navbar>
            <h1>This is a register page</h1>
            {error.length>0 && <p style={{color: 'red'}}><span>{error}</span></p>}
            <div style={{width: '500px', marginLeft: '446px', marginBottom: '20px'}}>
                <form onSubmit={handleSubmit(submitForm)}>
                    <div class="form-group">
                        <label for="exampleInputFirstName">First Name</label>
                        <input type="text" class="form-control" {...register("firstName")} placeholder="First Name"/>
                    </div>
                    <p style={{color: 'red'}}>{errors.firstName ?.message}</p>
                    <div class="form-group">
                        <label for="exampleInputLastName">Last Name</label>
                        <input type="text" class="form-control" {...register("lastName")} placeholder="Last Name"/>
                    </div>
                    <p style={{color: 'red'}}>{errors.lastName ?.message}</p>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" {...register("email")} placeholder="Enter email"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <p style={{color: 'red'}}>{errors.email ?.message}</p>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" {...register("password")} placeholder="Password"/>
                    </div>
                    <p style={{color: 'red'}}>{errors.password ?.message}</p>
                    <div class="form-group">
                        <label for="exampleInputConfirmPassword1">Confirm Password</label>
                        <input type="password" class="form-control" {...register("confirmPassword")} placeholder="Confirm Password"/>
                    </div>
                    <p style={{color: 'red'}}>{errors.confirmPassword && "Password should match"}</p>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SignUp;