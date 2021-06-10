import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const DonationDetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const {id} = useParams();
    const [donation, setDonation] = useState({});
    useEffect(()=>{
        fetch("http://localhost:5000/donation/"+id)
        .then(response => response.json())
        .then(result => setDonation(result))
    }, [])
    const deleteDonation = (id) => {
        fetch("http://localhost:5000/delete/donation/"+id, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(result => {
            history.push("/donations")
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-sm-12">
                        <h1>Donation details page</h1>
                        <h4>Donation title: {donation.name}</h4>
                        <p>Description: {donation.description}</p>
                        <p><small>Category: {donation.categories}</small></p>
                        <p>Delivery type: {donation.delivery}</p>
                        <p>Donor Name: {donation.donorName}</p>
                        <img style={{width: '500px', height: '300px'}} src={`http://localhost:5000/${donation.img}`} alt="" />
                        <br />
                        {
                            loggedInUser.name === donation.donorName && <div><Link to={"/donation/update/"+donation._id} className="btn btn-success">Update donation</Link>
                            <button onClick={()=>{deleteDonation(donation._id)}} class="btn btn-danger">Delete</button></div> 
                        }
                    </div>
                </div>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default DonationDetails;