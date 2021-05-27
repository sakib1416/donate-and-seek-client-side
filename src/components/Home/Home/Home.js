import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import About from '../About/About';
import Budget from '../Budget/Budget';
import ContactUs from '../ContactUs/ContactUs';
import Impact from '../Impact/Impact';
import RecentEvents from '../RecentEvents/RecentEvents';
import Review from '../Review/Review';
import TopBanner from '../TopBanner/TopBanner';
import VideoSection from '../VideoSection/VideoSection';

const Home = () => {
    return (
        <body>
            <Navbar></Navbar>
            <TopBanner></TopBanner>
            <About></About>
            <Budget></Budget>
            <Impact></Impact> 
            <Review></Review>
            <VideoSection></VideoSection>
            <RecentEvents></RecentEvents>
            <ContactUs></ContactUs>
            <Footer></Footer>
    </body>
    );
};

export default Home;