import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import DonationCards from '../DonationCards/DonationCards';

const Donations = () => {
    const [donations, setDonations] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/donations")
        .then(response => response.json())
        .then(data => setDonations(data));
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-center">List of donations</h1>
            <Link className="btn btn-success content-center" to="/addDonation">Add your Donations</Link>
            <section id="overview" >
                <div class="container">
                    <div class="row  pad-top" >
                        <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-sm-12">
                            <h3>Categories</h3>
                            <p>
                            <b>GIVE HELP</b> Comes with Two Variant one is blue and the other is green. These two variants are designed simply and uniquely.
                                No junk code or unwanted scripts called. We coded it so simply to understand and customize.
                                Just Use these template and enjoy.   
                            </p>
                            
                        </div>
                    </div>
                </div>
            </section>
            {
                donations.map(donation => <DonationCards donation={donation}></DonationCards>)
            }
            <Footer></Footer>
        </div>
    );
};

export default Donations;