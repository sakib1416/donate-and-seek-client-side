import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            {/* <div id="pre-div">
                <div id="loader">
                </div>
            </div> */}
        
        <div id="home" class="navbar navbar-default move-me ">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <Link class="navbar-brand mt-4" to="/">
                        Donate&Seek
                    </Link>
                </div>
                <div class="navbar-collapse collapse ">
                    <ul class="nav navbar-nav navbar-right">

                        <li class="dropdown">
                            <Link to="/">HOME <i class="fa fa-bars"></i>
                                <span>Introduction</span>
                            </Link>
                        </li>
                        <li class="dropdown">
                            <Link to="/donations">DONATIONS <i class="fa fa-bars"></i>
                                <span>See our donations</span>
                            </Link>
                        </li>
                        <li class="dropdown">
                            <a href="#impact">SEEK HELP<i class="fa fa-bars"></i>
                                <span>Ask what you need</span>
                            </a>
                        </li>
                        <li class="dropdown">
                            <a href="#recent-events">Government Aids<i class="fa fa-bars"></i>
                                <span>List of government aids</span>
                            </a>
                        </li>
                        <li class="dropdown">
                            <a href="#contact">CONTACT <i class="fa fa-bars"></i>
                                <span>Reach us Here</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
        <div class="header-sec-bar" >
            <span>
                <i class="fa fa-envelope-o "></i>support@donateandseek.com 
                <i class="fa fa-phone "></i>+61-123-456-789
                <i class="fa fa-globe"></i>www.donateandseek.com
            </span>

        </div>
        </div>
    );
};

export default Navbar;