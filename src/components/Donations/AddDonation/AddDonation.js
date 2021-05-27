import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';


const AddDonation = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const history = useHistory();
    const onSubmit = data => {
        console.log(data);
        const formData = new FormData()
        formData.append('file', data.picture[0]);
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('location', data.location);
        formData.append('categories', data.categories);
        formData.append('delivery', data.delivery);
        console.log(formData);
        fetch("http://localhost:5000/addDonation", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            history.push("/donations")
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="content-center">Add your donations</h1>
            <div style={{width: '400px'}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input type="text" class="form-control" {...register("name")} placeholder="Give a title"/>
                            <small class="form-text text-muted">We'll never share your information with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea2">Description of your donation</label>
                            <textarea class="form-control rounded-0" {...register("description")} rows="4"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Location</label>
                            <input type="text" class="form-control" {...register("location")} placeholder="Type your location"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Upload Picture</label>
                            <input type="file" class="form-control" {...register("picture")} placeholder="picture"/>
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Categories</label>
                            </div>
                            <select {...register("categories", { required: true })} class="custom-select" id="inputGroupSelect01">
                                <option selected>Choose...</option>
                                <option value="food">Food</option>
                                <option value="education">Education</option>
                                <option value="household">Household Appliances</option>
                                <option value="covid">Covid-19</option>
                            </select>
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Delivery Type</label>
                            </div>
                            <select {...register("delivery", { required: true })} class="custom-select" id="inputGroupSelect01">
                                <option selected>Choose...</option>
                                <option value="pick">PickUp</option>
                                <option value="send">Courier</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddDonation;