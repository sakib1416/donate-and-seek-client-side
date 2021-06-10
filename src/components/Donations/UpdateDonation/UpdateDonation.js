import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const UpdateDonation = () => {
    const { register, handleSubmit } = useForm();
    const {id} = useParams();
    const history = useHistory();
    const [updateData, setUpdateData] = useState({});
    useEffect(()=>{
        fetch("http://localhost:5000/donation/"+id)
        .then(response => response.json())
        .then(result => setUpdateData(result))
    }, [])
    const onSubmit = (data) => {
        const donation = {
            name: data.name,
            description: data.description,
            location: data.location,
            categories: data.categories,
            delivery: data.delivery
        };
        fetch("http://localhost:5000/update/donation/"+id, {
            method: "PATCH",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(donation)
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            history.push("/donation/"+id)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <h1>Update Donation Page</h1>
            <div style={{width: '400px'}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input type="text" class="form-control" defaultValue={updateData.name} {...register("name")}/>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea2">Description of your donation</label>
                            <textarea class="form-control rounded-0" defaultValue={updateData.description} {...register("description")} rows="4"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Location</label>
                            <input type="text" class="form-control" defaultValue={updateData.location} {...register("location")} placeholder="Type your location"/>
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

export default UpdateDonation;