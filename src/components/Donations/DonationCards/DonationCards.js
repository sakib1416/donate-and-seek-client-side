import React from 'react';
import { Link } from 'react-router-dom';

const DonationCards = (props) => {
    const {name, description, location, categories, delivery, img} = props.donation;
    return (
        <div>
            <section id="features" style={{backgroundColor: '#ededed'}} >
                <div class="container">
                    <div class="row " >
                        <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-sm-12">
                            <h3>Donation title: {name}</h3>
                            <p><b>Category:</b> {categories}</p>
                            <img style={{width: '300px', height: '200px'}} src={`http://localhost:5000/${img}`} alt="" />
                            <br />
                            <Link className="btn btn-info" to={`/donation/${props.donation._id}`}>See Details</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DonationCards;