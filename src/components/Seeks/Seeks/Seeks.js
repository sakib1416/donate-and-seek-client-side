import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import SeekingsAll from '../SeekingsAll/SeekingsAll';


const Seeks = () => {
    const [seekings, setSeekings] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/seekings")
        .then(response => response.json())
        .then(result => setSeekings(result))
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-center">List of available aids</h1>
            <Link className="btn btn-success content-center" to="/addSeek">Post for help</Link>
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
                seekings.map(seek => <SeekingsAll seek={seek}></SeekingsAll>)
            }
            <Footer></Footer>
        </div>
    );
};

export default Seeks;