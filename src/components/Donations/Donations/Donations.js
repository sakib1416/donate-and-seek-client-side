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
                            <b>Donate&Seek</b> CAenean faucibus luctus enim. Duis quis sem risu suspend lacinia elementum nunc. Aenean faucibus luctus enim. Duis quis sem risu suspend lacinia elementum nunc.  
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