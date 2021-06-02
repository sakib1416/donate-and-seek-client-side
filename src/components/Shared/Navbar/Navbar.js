import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import {handleSignOut} from '../../Login/LoginManager'

const Navbar = () => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleLogOut = () => {
        handleSignOut()
        .then(response => {
            setLoggedInUser(response);
            history.push("/");
        })
    }
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
                        {
                            loggedInUser.email ? <li class="dropdown">
                                <Link to="/login">{loggedInUser.name} <i class="fa fa-bars"></i>
                                    <span>Explore your account</span>
                                </Link>
                            </li> 
                            : <li class="dropdown">
                            <Link to="/login">LOGIN <i class="fa fa-bars"></i>
                                <span>Connect with us</span>
                            </Link>
                        </li>
                        }
                        {
                            loggedInUser.email && <li class="dropdown">
                                <Link onClick={handleLogOut}>Log Out <i class="fa fa-bars"></i>
                                    <span>Come back again</span>
                                </Link>
                            </li>
                        }
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