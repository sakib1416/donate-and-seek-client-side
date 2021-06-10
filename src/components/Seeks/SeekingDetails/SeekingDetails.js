import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const SeekingDetails = () => {
    const {id} = useParams();
    const [seek, setSeek] = useState({});
    useEffect(()=>{
        fetch("http://localhost:5000/seeking/"+id)
        .then(response => response.json())
        .then(result => setSeek(result))
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <h1>Seeking details page</h1>
            <div className="container">
                <div className="row">
                    <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-sm-12">
                        <h1>Seeking details page</h1>
                        <h4>Seeking for: {seek.name}</h4>
                        <p>Details of the aid: {seek.description}</p>
                        <p><small>Category: {seek.categories}</small></p>
                        <p>Delivery type: {seek.delivery}</p>
                        <p>Seeker Name: {seek.seekerName}</p>
                        <img style={{width: '500px', height: '300px'}} src={`http://localhost:5000/${seek.img}`} alt="" />
                        <br />
                        {/* {
                            loggedInUser.name === donation.donorName && <div><Link to={"/donation/update/"+donation._id} className="btn btn-success">Update donation</Link>
                            <button onClick={()=>{deleteDonation(donation._id)}} class="btn btn-danger">Delete</button></div> 
                        } */}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SeekingDetails;