import React from 'react';
import { Link } from 'react-router-dom';

const SeekingsAll = (props) => {
    const {name, description, location, categories, delivery, img} = props.seek;
    return (
        <div>
            <section id="features" style={{backgroundColor: '#ededed'}} >
                <div class="container">
                    <div class="row " >
                        <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-sm-12">
                            <div class="card">
                                <h3 class="card-header">Donation: {name}</h3>
                                <div class="card-body">
                                    <h5 class="card-title"><b>Category:</b> {categories}</h5>
                                    <p class="card-text">{description}</p>
                                    <img style={{width: '300px', height: '200px', marginBottom: '10px'}} src={`http://localhost:5000/${img}`} alt="" />
                                    <br />
                                    <Link class="btn btn-primary" to={`/seeking/${props.seek._id}`}>See Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>
        </div>
    );
};

export default SeekingsAll;