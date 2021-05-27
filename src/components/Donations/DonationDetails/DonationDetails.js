import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const DonationDetails = () => {
    const {id} = useParams();
    const [donation, setDonation] = useState({});
    useEffect(()=>{
        fetch("http://localhost:5000/donation/"+id)
        .then(response => response.json())
        .then(result => setDonation(result))
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <h1>Donation details page</h1>
            <h4>Donation title: {donation.name}</h4>
            <p>Description: {donation.description}</p>
            <p><small>Category: {donation.categories}</small></p>
            <p>Delivery type: {donation.delivery}</p>
            <img src={`http://localhost:5000/${donation.img}`} alt="" />
            <Footer></Footer>
        </div>
    );
};

export default DonationDetails;